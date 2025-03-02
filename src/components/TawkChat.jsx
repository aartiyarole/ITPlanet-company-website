import  { useEffect } from 'react';


export default function TawkChat() {

    useEffect(() => {
        // Adding the Tawk.to script dynamically when the component mounts
        const script = document.createElement('script');
        script.src = 'https://embed.tawk.to/65607e73da19b362179065e3/1hg0ertbj';
        script.async = true;
        script.charset = 'UTF-8';
        script.setAttribute('crossorigin', '*');
        document.head.appendChild(script);
    
        // Optional: Clean up the script when the component unmounts
        return () => {
          document.head.removeChild(script);
        };
      }, []);
    
      return null; // This component doesn't render anything
}


