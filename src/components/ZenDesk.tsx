"use client";
import { useEffect } from "react";

function ZendeskChat() {
  useEffect(() => {
    const zendeskScript = document.createElement("script");
    zendeskScript.id = "ze-snippet";
    zendeskScript.src =
      "https://static.zdassets.com/ekr/snippet.js?key=607cfb77-0c92-4fb0-b1ff-0cc9dbbd3838";
    zendeskScript.async = true;
    document.body.appendChild(zendeskScript);

    return () => {
      // Cleanup the script when component unmounts
      document.body.removeChild(zendeskScript);
    };
  }, []);

  return null;
}

export default ZendeskChat;
