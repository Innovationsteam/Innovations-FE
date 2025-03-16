import { connectToPushService } from "@/actions/auth.actions";
import { useEffect, useRef } from "react";

const useServiceWorker = (isLoggedIn: boolean) => {
	const swRegistrationRef = useRef<ServiceWorkerRegistration | null>(null);

	// Register service worker on component mount
	useEffect(() => {
		async function registerServiceWorker() {
			if ("serviceWorker" in navigator) {
				try {
					const registration = await navigator.serviceWorker.register("/service-worker.js");
					// console.log("Service Worker registered:", registration);
					swRegistrationRef.current = registration;
					return registration;
				} catch (error) {
					console.log("Service Worker registration failed:", error);
				}
			}
		}

		registerServiceWorker();
	}, []);

	// Subscribe to push notifications after login
	useEffect(() => {
		async function subscribeToPush() {
			if (!swRegistrationRef.current || !isLoggedIn) {
				return;
			}

			if (!swRegistrationRef.current.pushManager) {
				console.error("Push Manager not available");
				return;
			}

			try {
				// Request notification permission only after login
				const permission = await Notification.requestPermission();

				if (permission === "granted") {
					const subscription = await swRegistrationRef.current.pushManager.subscribe({
						userVisibleOnly: true,
						applicationServerKey: import.meta.env.VITE_PUSH_NOTIFICATION_KEY,
					});

					// console.log("Push Subscription:", subscription);

					// Send subscription to backend
					await connectToPushService(subscription);
				} else {
					console.log("Notification Permission not granted");
				}
			} catch (error) {
				console.error("Error subscribing to push notifications:", error);
			}
		}

		subscribeToPush();
	}, [isLoggedIn]);
};

export default useServiceWorker;
