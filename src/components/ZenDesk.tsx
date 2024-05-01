"use client";
import { useEffect } from "react";

function ZendeskChat() {
  useEffect(() => {
    // Set initial configuration before loading the script

    // Create and append the Zendesk SDK script
    const zendeskScript = document.createElement("script");
    zendeskScript.id = "ze-snippet";
    zendeskScript.src =
      "https://static.zdassets.com/ekr/snippet.js?key=607cfb77-0c92-4fb0-b1ff-0cc9dbbd3838";
    zendeskScript.async = true;
    document.body.appendChild(zendeskScript);

    // Wait for the script to load and API to become available
    zendeskScript.onload = () => {
      if (window.zE) {
        // Implement any additional API calls if necessary here
      }
    };

    // Cleanup the script when the component unmounts
    return () => {
      if (document.body.contains(zendeskScript)) {
        document.body.removeChild(zendeskScript);
      }
      window.zE = undefined;
      window.zESettings = undefined;
    };
  }, []);

  return (
    <button
      className="fixed bottom-5 right-5 rounded-full font-bold font-mukta px-4 pt-3 pb-[10px] bg-[#3A73B2] text-white z-50 flex items-center justify-centerD"
      onClick={() => window.zE("messenger", "open")}
    >
      <svg
        className="w-5 h-5 mr-2 mb-[2px]"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      Chat with AniSoft
    </button>
  );
}

export default ZendeskChat;
