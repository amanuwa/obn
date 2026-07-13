// ========================================================
// 🔐 CORE INFRASTRUCTURE CONFIGURATION (DO NOT SHARE)
// ========================================================

export const SUPABASE_URL = 'https://cqkaxhyrnjmqpovxwjom.supabase.co';
export const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNxa2F4aHlybmptcXBvdnh3am9tIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODMxMTkwMTcsImV4cCI6MjA5ODY5NTAxN30.eT1lDRDoV3SK_d9yEAYzN6X-lC6EKkNNoavQxgLU6-Q';

// Direct ngrok tunnel pipeline with zero proxy interference
//export const N8N_CONTENT_URL = 'https://unreached-oboe-evade.ngrok-free.dev/webhook/register-journalist';
// Direct ngrok tunnel pipeline with zero proxy interference
export const N8N_CONTENT_URL = 'https://corsproxy.io/?https://terminal-n8n-gateway.onrender.com/webhook/register-journalist';
export const N8N_GATEWAY_WEBHOOK = 'https://corsproxy.io/?https://terminal-n8n-gateway.onrender.com/webhook/starit_of_hormuz';
//export const N8N_GATEWAY_WEBHOOK = 'https://terminal-n8n-gateway.onrender.com/webhook/starit_of_hormuz';
// ========================================================
// 🚧 DEVELOPMENT ROUTER OVERRIDE
// ========================================================
// Set this to "DISABLED" for normal login flow.
// Options: "DISABLED", "POLITICS", "SPORTS", "FINANCE", "HOT_NEWS"
export const DEV_MODE_OVERRIDE = "DISABLED";
