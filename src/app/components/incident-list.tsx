'use client';

import React, { useEffect, useState } from "react";
import { IncidentCard } from "@/components/ui/incidentcard";
import { Skeleton } from '@/components/ui/skeleton';
import { AlertTriangle, CheckCircle } from "lucide-react";

type Incident = {
  id: number;
  cameraId: number;
  camera?: { name?: string };
  type: string;
  tsStart: string;
  tsEnd: string;
  thumbnailUrl: string;
  resolved: boolean;
};

export default function IncidentList() {
  const [incidents, setIncidents] = useState<Incident[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchIncidents = async () => {
      try {
        const res = await fetch('/api/incidents');
        const data = await res.json();
        console.log("Fetched data:", data);
        if (Array.isArray(data)) {
          setIncidents(data);
        } else {
          console.error('Expected array but got:', data);
          setIncidents([]);
        }
      } catch (err) {
        console.error('Failed to fetch incidents', err);
      } finally {
        setLoading(false);
      }
    };
    fetchIncidents();
  }, []);

  const handleResolve = async (id: number) => {
    try {
      await fetch(`/api/incidents/${id}/resolve`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ resolved: true }),
      });

      setIncidents(prev =>
        prev.map(inc =>
          inc.id === id ? { ...inc, resolved: true } : inc
        )
      );
    } catch (err) {
      console.error('Failed to resolve incident', err);
    }
  };

  const unresolvedCount = incidents.filter(inc => !inc.resolved).length;
  const resolvedCount = incidents.length - unresolvedCount;

  return (
    <div className="h-[450px] overflow-hidden bg-[#131313] p-3 rounded-lg flex flex-col gap-4">
      
      {/* Header*/}
      <div className="flex items-center justify-between px-1 font-bold ">
        <div className="flex items-center gap-2 text-white">
          <AlertTriangle size={20} color='red' />
          <span className="text-lg font-bold">{unresolvedCount} Unresolved Incidents</span>
        </div>
        <div className="flex items-center gap-2 text-white">
          <CheckCircle size={20} color="lime" />
          <span className="text-sm font-medium">{resolvedCount} resolved incidents</span>
        </div>
      </div>

      {/*Skeletons */}
      {loading ? (
        <div className="space-y-4">
          {[...Array(3)].map((_, i) => (
            <Skeleton key={i} className="h-24 w-full rounded-md" />
          ))}
        </div>
      ) : (
        <div className="overflow-y-auto pr-1 pt-2 h-full space-y-4 custom-scroll-hide">
          {incidents.length === 0 ? (
            <p className="text-muted-foreground">No incidents found.</p>
          ) : (
            incidents
              .filter(inc => !inc.resolved)
              .map((incident) => (
                <IncidentCard
                  key={incident.id}
                  incident={incident}
                  onResolve={() => handleResolve(incident.id)}
                />
              ))
          )}
        </div>
      )}
    </div>
  );
}
