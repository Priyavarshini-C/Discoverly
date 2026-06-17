export default function NotificationsPage() {
  const notifications = [
    {
      id: 1,
      message: "Atomic Habits price dropped to ₹449",
    },
    {
      id: 2,
      message: "Your order for Rich Dad Poor Dad has been shipped",
    },
    {
      id: 3,
      message: "New seller added for Think and Grow Rich",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-100 p-10">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-blue-600 mb-8">
          Notifications
        </h1>

        <div className="space-y-4">
          {notifications.map((notification) => (
            <div
              key={notification.id}
              className="bg-white rounded-2xl shadow-lg p-6"
            >
              <p className="text-lg text-black">
                {notification.message}
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}