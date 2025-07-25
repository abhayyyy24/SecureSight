import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.incident.deleteMany();
  await prisma.camera.deleteMany();

  await prisma.camera.createMany({
    data: [
      { name: 'Floor A', location: 'Floor A - Biling Counter' },
      { name: 'Vault', location: 'Security Room A' },
      { name: 'Entrance', location: 'Main Gate' },
    ],
  });

  const [shopCam, vaultCam, entranceCam] = await prisma.camera.findMany();

  const now = new Date();
  const hoursAgo = (h: number) => new Date(now.getTime() - h * 60 * 60 * 1000);

  await prisma.incident.createMany({
    data: [
      {
        cameraId: entranceCam.id,
        type: 'Unauthorised Access',
        tsStart: hoursAgo(1),
        tsEnd: hoursAgo(0.8),
        thumbnailUrl: '/images/ua.png',
        resolved: false,
      },
      {
        cameraId: shopCam.id,
        type: 'Gun Threat',
        tsStart: hoursAgo(3),
        tsEnd: hoursAgo(2.8),
        thumbnailUrl: '/images/gt.jpg',
        resolved: false,
      },
      {
        cameraId: vaultCam.id,
        type: 'Face Recognised',
        tsStart: hoursAgo(5),
        tsEnd: hoursAgo(4.5),
        thumbnailUrl: '/images/ua.png',
        resolved: false,
      },
      {
        cameraId: shopCam.id,
        type: 'Loitering',
        tsStart: hoursAgo(6),
        tsEnd: hoursAgo(5.7),
        thumbnailUrl: '/images/ua3.jpg',
        resolved: true,
      },
      {
        cameraId: vaultCam.id,
        type: 'Unauthorised Access',
        tsStart: hoursAgo(7),
        tsEnd: hoursAgo(6.8),
        thumbnailUrl: '/images/ua2.png',
        resolved: false,
      },
      {
        cameraId: entranceCam.id,
        type: 'Gun Threat',
        tsStart: hoursAgo(8),
        tsEnd: hoursAgo(7.5),
        thumbnailUrl: '/images/gt.jpg',
        resolved: false,
      },
      {
        cameraId: shopCam.id,
        type: 'Face Recognised',
        tsStart: hoursAgo(9),
        tsEnd: hoursAgo(8.8),
        thumbnailUrl: '/images/ua.png',
        resolved: false,
      },
      {
        cameraId: vaultCam.id,
        type: 'Gun Threat',
        tsStart: hoursAgo(10),
        tsEnd: hoursAgo(9.8),
        thumbnailUrl: '/images/gt.jpg',
        resolved: true,
      },
      {
        cameraId: entranceCam.id,
        type: 'Unauthorised Access',
        tsStart: hoursAgo(12),
        tsEnd: hoursAgo(11.7),
        thumbnailUrl: '/images/ua2.png',
        resolved: false,
      },
      {
        cameraId: shopCam.id,
        type: 'Loitering',
        tsStart: hoursAgo(14),
        tsEnd: hoursAgo(13.5),
        thumbnailUrl: '/images/gt.jpg',
        resolved: false,
      },
      {
        cameraId: vaultCam.id,
        type: 'Face Recognised',
        tsStart: hoursAgo(16),
        tsEnd: hoursAgo(15.5),
        thumbnailUrl: '/images/ua2.png',
        resolved: false,
      },
      {
        cameraId: entranceCam.id,
        type: 'Gun Threat',
        tsStart: hoursAgo(20),
        tsEnd: hoursAgo(19.8),
        thumbnailUrl: '/images/gt.jpg',
        resolved: false,
      },

      
      {
        cameraId: shopCam.id,
        type: 'Face Recognised',
        tsStart: hoursAgo(21),
        tsEnd: hoursAgo(20.7),
        thumbnailUrl: '/images/ua3.jpg',
        resolved: true,
      },
      {
        cameraId: vaultCam.id,
        type: 'Loitering',
        tsStart: hoursAgo(22),
        tsEnd: hoursAgo(21.8),
        thumbnailUrl: '/images/gt.jpg',
        resolved: false,
      },
      {
        cameraId: entranceCam.id,
        type: 'Unauthorised Access',
        tsStart: hoursAgo(23),
        tsEnd: hoursAgo(22.9),
        thumbnailUrl: '/images/ua.png',
        resolved: false,
      },
    ],
  });
}

main()
  .then(() => {
    console.log('success!');
  })
  .catch((err) => {
    console.error('error: ', err);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
