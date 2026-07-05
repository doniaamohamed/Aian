"use client";

import React from "react";

export function SettingsScreen() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold font-display text-gold-gradient">Settings</h1>
      <p className="mt-2 text-muted-foreground">Adjust security levels, team scopes, and deploy config.</p>
    </div>
  );
}

export default SettingsScreen;
