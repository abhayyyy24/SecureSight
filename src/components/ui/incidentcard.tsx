import React from 'react';
import { Card } from '@/components/ui/card';
import {
  ArrowRight,
  Camera,
  Clock,
  DoorOpen,
  ShieldAlert,
} from 'lucide-react';

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

type Props = {
  incident: Incident;
  onResolve: (id: number) => void;
};

const getIncidentIcon = (type: string) => {
  switch (type.toLowerCase()) {
    case 'gun threat':
      return <ShieldAlert size={16} className="text-red-500" />;
    case 'unauthorised access':
    default:
      return <DoorOpen size={16} className="text-orange-500" />;
  }
};

export const IncidentCard: React.FC<Props> = ({ incident, onResolve }) => {
  const formattedDate = new Date(incident.tsStart).toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });

  const formattedStartTime = new Date(incident.tsStart).toLocaleTimeString('en-GB', {
    hour: '2-digit',
    minute: '2-digit',
  });

  const formattedEndTime = new Date(incident.tsEnd).toLocaleTimeString('en-GB', {
    hour: '2-digit',
    minute: '2-digit',
  });

  return (
    <Card className="flex flex-row items-center h-[75px] bg-[#131313] text-white p-1 rounded-md border-none gap-4">
      {/* Thumbnail */}
      <img
        src={incident.thumbnailUrl}
        alt="Incident thumbnail"
        className="h-[67px] w-[120px] rounded-md object-cover flex-shrink-0"
      />

      {/* Info Section */}
      <div className="flex flex-col h-4 justify-center flex-1 space-y-1">
        {/* Incident Type */}
        <div className="flex items-center gap-2 text-[12px] font-bold mb-4">
          {getIncidentIcon(incident.type)}
          <span>{incident.type}</span>
        </div>

        {/* Camera */}
        <div className="flex items-center gap-2 text-[10px] text-white">
          <Camera size={10} />
          <span>{incident.camera?.name ?? 'Unknown Camera'}</span>
        </div>

        {/* Time */}
        <div className="flex items-center gap-2 text-[10px] font-bold text-white">
          <Clock size={10} />
          <span>
            {formattedStartTime} - {formattedEndTime} on {formattedDate}
          </span>
        </div>
      </div>

      {/* Resolve Button */}
      {!incident.resolved && (
        <div
          onClick={() => onResolve(incident.id)}
          className="flex items-center text-[#FFD600] font-bold text-sm cursor-pointer pr-4 whitespace-nowrap"
        >
          Resolve
          <ArrowRight size={16} className="ml-1" />
        </div>
      )}
    </Card>
  );
};
