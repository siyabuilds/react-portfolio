import { useState, useEffect } from "react";
import Swal from "sweetalert2";

export const useVisitCounter = () => {
  const [hasShownModal, setHasShownModal] = useState(false);

  useEffect(() => {
    const showPortfolioModal = () => {
      // Get current theme from the document attribute
      const currentTheme =
        document.documentElement.getAttribute("data-theme") || "light";

      // Define theme-specific colors
      const themeColors = {
        light: {
          background: "#ffffff",
          text: "#111827",
          primary: "#3b82f6",
          hover: "#f3f4f6",
        },
        dark: {
          background: "#0d1117",
          text: "#c9d1d9",
          primary: "#3b82f6",
          hover: "#1f2937",
        },
        dracula: {
          background: "#282a36",
          text: "#f8f8f2",
          primary: "#ff79c6",
          hover: "#44475a",
        },
      };

      const colors = themeColors[currentTheme] || themeColors.light;

      Swal.fire({
        title: "🚀 Check out my latest work!",
        html: `
          <div style="color: ${colors.text}; line-height: 1.6;">
            <p style="margin-bottom: 16px;">I've built a new and improved portfolio using <strong>Next.js</strong>!</p>
            <p style="margin-bottom: 16px;">It features enhanced performance, better animations, and more projects.</p>
            <p style="color: ${colors.primary}; font-weight: 600;">Would you like to check it out?</p>
          </div>
        `,
        icon: "info",
        showCancelButton: true,
        confirmButtonText: "Visit siyabuilds.tech",
        cancelButtonText: "Maybe later",
        reverseButtons: true,
        background: colors.background,
        color: colors.text,
        customClass: {
          popup: "custom-swal-popup",
          title: "custom-swal-title",
          htmlContainer: "custom-swal-html",
          confirmButton: "custom-swal-confirm",
          cancelButton: "custom-swal-cancel",
        },
        didOpen: () => {
          // Apply custom styles after modal opens
          const style = document.createElement("style");
          style.textContent = `
            .custom-swal-popup {
              border: 2px solid ${colors.primary} !important;
              border-radius: 12px !important;
              font-family: 'Space Grotesk', sans-serif !important;
            }
            .custom-swal-title {
              color: ${colors.primary} !important;
              font-size: 1.5rem !important;
              font-weight: 700 !important;
            }
            .custom-swal-html {
              color: ${colors.text} !important;
            }
            .custom-swal-confirm {
              background-color: ${colors.primary} !important;
              border: none !important;
              border-radius: 8px !important;
              padding: 12px 24px !important;
              font-weight: 600 !important;
              font-family: 'Space Grotesk', sans-serif !important;
              transition: all 0.3s ease !important;
            }
            .custom-swal-confirm:hover {
              background-color: ${colors.hover} !important;
              color: ${colors.text} !important;
              transform: translateY(-2px) !important;
            }
            .custom-swal-cancel {
              background-color: transparent !important;
              border: 2px solid ${colors.primary} !important;
              color: ${colors.primary} !important;
              border-radius: 8px !important;
              padding: 12px 24px !important;
              font-weight: 600 !important;
              font-family: 'Space Grotesk', sans-serif !important;
              transition: all 0.3s ease !important;
            }
            .custom-swal-cancel:hover {
              background-color: ${colors.hover} !important;
              color: ${colors.text} !important;
              border-color: ${colors.hover} !important;
            }
            .swal2-icon.swal2-info {
              border-color: ${colors.primary} !important;
              color: ${colors.primary} !important;
            }
          `;
          document.head.appendChild(style);
        },
      }).then((result) => {
        if (result.isConfirmed) {
          window.open("https://siyabuilds.tech", "_blank");
        }
      });
    };

    const checkAndIncrementVisits = () => {
      // Get the current session ID (create one if it doesn't exist)
      let sessionId = sessionStorage.getItem("portfolioSessionId");
      if (!sessionId) {
        sessionId =
          Date.now().toString() + Math.random().toString(36).substr(2, 9);
        sessionStorage.setItem("portfolioSessionId", sessionId);
      }

      // Get visit data from localStorage
      const visitData = JSON.parse(
        localStorage.getItem("portfolioVisits") || "{}"
      );
      const lastSessionId = visitData.lastSessionId;
      const visitCount = visitData.count || 0;
      const hasShownInThisSession = visitData.shownInSession === sessionId;

      // Only increment if this is a new session (page refresh or new visit)
      if (lastSessionId !== sessionId && !hasShownInThisSession) {
        const newCount = visitCount + 1;

        // Update localStorage with new visit data
        localStorage.setItem(
          "portfolioVisits",
          JSON.stringify({
            count: newCount,
            lastSessionId: sessionId,
            lastVisit: new Date().toISOString(),
            shownInSession:
              newCount >= 5 ? sessionId : visitData.shownInSession,
          })
        );

        // Show modal if we've reached 5 visits and haven't shown it in this session
        if (newCount >= 5) {
          setTimeout(() => {
            showPortfolioModal();
            setHasShownModal(true);
          }, 1500);
        }
      }
    };

    // Run the check after a short delay to ensure the page is loaded
    const timeoutId = setTimeout(checkAndIncrementVisits, 500);

    return () => clearTimeout(timeoutId);
  }, []);

  return { hasShownModal };
};
