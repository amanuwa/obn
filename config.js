// ========================================================
// 🔐 CORE INFRASTRUCTURE CONFIGURATION (DO NOT SHARE)
// ========================================================

export const SUPABASE_URL = 'https://cqkaxhyrnjmqpovxwjom.supabase.co';
export const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNxa2F4aHlybmptcXBvdnh3am9tIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODMxMTkwMTcsImV4cCI6MjA5ODY5NTAxN30.eT1lDRDoV3SK_d9yEAYzN6X-lC6EKkNNoavQxgLU6-Q';
// Initialize Supabase Client
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
// Cloudinary Configuration for Media Processing
export const CLOUDINARY_CLOUD_NAME = 'dxvzzdaln';
export const CLOUDINARY_API_KEY = '691637858758474';
export const CLOUDINARY_API_SECRET = 'jRip-w_yqGliPNbDtx-d01lHnjU'; // Paste your secret here
export const N8N_CONTENT_URL = 'https://corsproxy.io/?https://terminal-n8n-gateway.onrender.com/webhook/register-journalist';


export const GOOGLE_SCRIPT_URL ='https://script.google.com/macros/s/AKfycbwHRHhrpr3eg8Orkz_x4wPYrVK6t1jP2UsWQ6fvjYGEf5Jk2nx946QIhdawhuc3htJE/exec';

 export const N8N_GATEWAY_WEBHOOK ='https://unreached-oboe-evade.ngrok-free.dev/webhook/staritofhormuz';
 export const postautomation ='https://unreached-oboe-evade.ngrok-free.dev/webhook/postAutomation';

export const researchpage  = 'https://unreached-oboe-evade.ngrok-free.dev/webhook-test/researchpage';
export const N8N_Preparepage_GATEWAY_WEBHOOK = 'https://unreached-oboe-evade.ngrok-free.dev/webhook-test/08759d33-7b7f-4236-ae61-1d98b4a30815';

export const N8N_sport_GATEWAY_WEBHOOK='https://unreached-oboe-evade.ngrok-free.dev/webhook-test/sport';
// ========================================================
// 🚧 DEVELOPMENT ROUTER OVERRIDE
// ========================================================
// Set this to "DISABLED" for normal login flow.
// Options: "DISABLED", "POLITICS", "SPORTS", "FINANCE", "HOT_NEWS"
export const DEV_MODE_OVERRIDE = "DISABLED";
