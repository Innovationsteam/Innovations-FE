/* eslint-disable no-undef */
self.addEventListener("push", (event) => {
	const notification = event.data.json();

	const options = {
		body: notification.data.content,
		data: {
			...notification.data,
		},
		lang: "en-US",
		tag: notification.id,
		icon: "/assets/images/logo.ico",
		badge: "/assets/images/logo.ico",
		vibrate: [200, 100, 200],
		dir: "auto",
		actions: notification.actions || [
			{ action: "open", title: "Open" },
			{ action: "dismiss", title: "Dismiss" },
		],
	};

	event.waitUntil(self.registration.showNotification(notification.title, options));
});

self.addEventListener("notificationclick", function (event) {
	event.notification.close();

	if (event.action === "open") {
		const urlToOpen = event.notification.data.url;

		event.waitUntil(
			clients
				.matchAll({
					type: "window",
				})
				.then(function (clientList) {
					// Check if there's already a window/tab open with the target URL
					for (let i = 0; i < clientList.length; i++) {
						const client = clientList[i];
						if (client.url === urlToOpen && "focus" in client) {
							return client.focus();
						}
					}
					// If no window/tab is open, open a new one
					if (clients.openWindow) {
						return clients.openWindow(urlToOpen);
					}
				})
		);
	}
});
