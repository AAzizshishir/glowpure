import React from "react";

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <footer className="bg-primary text-white border-t mt-12">
        <div className="px-4 lg:px-10 py-6 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>{new Date().getFullYear()} GlowPure. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex gap-4">
            <p>Privacy Policy</p>
            <p>Terms of Service</p>
          </div>
        </div>
      </footer>
    </footer>
  );
}
