"use client";
import {usePathname} from "next/navigation";
import {useEffect,useState} from "react";
import {LeadControls} from "../leads/[id]/lead-controls";
type Lead={id:string;business_name:string;category:string;location:string;website_url:string;public_email:string;source_note:string;status:string};
const API=process.env.NEXT_PUBLIC_API_URL??"http://localhost:8080/api/v1";
export function LeadManagementSlot(){const path=usePathname(),match=path.match(/^\/leads\/([^/]+)$/),[lead,setLead]=useState<Lead|null>(null);const id=match?.[1];useEffect(()=>{if(!id)return;let cancelled=false;fetch(`${API}/leads/${id}`).then(r=>r.json()).then(b=>{if(!cancelled)setLead(b.data??null)});return()=>{cancelled=true}},[id]);if(!id||!lead)return null;return <div className="page management-slot"><LeadControls lead={lead} onUpdated={setLead}/></div>}
