import { useState, useRef } from "react";
const FIRMA_PATRON = "data:image/jpeg;base64,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zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzygADzzyhDzwhxCigBTzzzyjTzzzzzzwBzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzziywywhDDDTzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzyjQiwTyQTBTzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzxSTzjzzzijzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzyjAwTjRSwSQzTzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzxRjTiDDyCByDzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzijxjxTzgRDCxzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzhizBwCSAzxQzThTzzzTTzzzzzzzzzzzzzzzzzzzzzzzzzzzzzwQgTDDxARhRQhjDARTyxTjhSABTzzzzzzzzzzzzzzzzzzzzzzzzzzzzyyxQwATCDTTiCwRxxxCxwhQTTjxTzzzzzzzzzzzzzzzzzzzzzzzzzzzzywDQCQTCiDgSjgyzTgRxBRBAQgTzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzywghhQhhjSAwzzzijDRQDzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzwiyRgihghTyghSRBzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzywRiSCBDxzhQTSihxzzzzzzzzzzzzzzzzzzzzzzzzzzzjDzzjDDzzzzzyQiijgAjQBhSSCRTzzzzzzzzzzzzzzjDzzzzzzzzzzzzjjDSDCDTDDDDTQCgghTBRwzQRgTCABDzzDDDTzzgBCyDzzzzzzzzzzzygDxwhTADygBSxyQSThDyhBSiSxygBBQgDRTAzTxAQxABBgjzzzzzzzzhTQjSTyBBggiSxBBDCzghBSAQiThhhjBzTiyiSgwxCDAjxgzzzzzzzzwDSAATTDSCQTCDAATACBCgCDQDBCDDgCijAiCxiAjDgCwACBDzzzzz333z33333333333T333333zzzzzzzzzzzzzTHHHHTzzzzHHHHHHHHw1nP8A/wD+QQQQQQQQSTfQcTDAQcAAAAAAAAJAEEBPffffQgggrddffffffP/aAAwDAQACAAMAAAAQ8oAAAAEMc888888c88888888888888888888888888888888888888888sMMMMc88888888c888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888Q8Q888UsAoYQUko8oM088AIU88888880888888888888888888888888sMc888Mc8oAIMEU0cIc88s88888888Mc888888888888888888888888888888888g4s8cAI4E4088888888888888888888888888888888888888888888o8gcQo8sMwI8888888888888888888888888888888888888888888884oEkU4QQ8IMMM88888888888888888888888888888888888888888888UYI40Yswoscw8888888888888888888888888888888888888888840koQQw8UQUsIoo88888888888888888888888888888888888888888k8YswIkwgYkooIg888E088888888888888888888888888888o84wM8AYcAk0sMk0cAYog8IAQwc8888888888888888888888888888848cI88wAQ4wU88I8c0o4AQYUgw0888888888888888888888888888884M488sgAoYoo8csIAcAcIccMU4c88888888888888888888888888888888E0Uo8QwUQIwM88wQYc08888888888888888888888888888888888888ssUc00ogAMMQII0QAcc88888888888888888888888888888888888888sIsEM04c0Yw4swo08888888888888888888888888888ww84ww888884sIUMQowEwsgckso088884w888888808888888888888kcQ48oc488884ow4IcMgQ0wQoIoAU8swwoQ84ww08ks4ww088888888A4sUYkcIgQU0kwUUg0IEQg4oQgMAY04wco00MQkMgEsEc04YU8888888QQ0cMAAck4Qo8UsAYIkY8Qk0k4AEQgQAcIsk8EAgo4cIYEgcU8888888YUwEocUkcME8sMog00Iks8AEwk4goEIYog8kYoogksUYEksQc8884xxxwxxxxxxxxxxx4xxxxxx4wwwwwwwwwwww8999x4wwww99999999wPZy+OO7CCCCCCCCeC/CyDDCCizzzzzzzzHBRhAAMIAVCCCCosEMANIMN/8QAGhEBAQEAAwEAAAAAAAAAAAAAABEhEDAxoP/aAAgBAgEBPwD57InVOrWta1rW8VeYjxXqIiIiIiIiP//EABoRAQEBAQEBAQAAAAAAAAAAAAARASEQIKD/2gAIAQMBAT8A/NlVVVVVVVVVXyqqqvkRERERERPKvl+qqqqqqu/ERNTU1NTU1NTU1N82pqexNY66666666qqrfnPnfmJ7//EADUQAAEEAQIDBgQGAgMBAQAAAAEAAgMEERIhBRMxEBQiM0FRFSAyYCMwNEBCcWGBJFBSgKD/2gAIAQEAAT8C/wD0kZWezKysrP3QdlJb0yYTH6mr0TpmtG5T7zR0R4gu/uQ4h7pl1h6psgd0+5PVOVn9UonhkSmu+gQbLMfXCjoE9UKLF3KNOosKkokdE2SSA+JQWxIuv3GVdOmbKEz5W4Cr087uTI2tHT5MLClrtkHRSRvrv2Vazq2WdvuJzsNyrkmuVUIgQgMD8iWMSNTw6vLn0VaYPb2D7gvT4GkJ4OclcNfsh+RhWoNbOiruMU2Cgcj7gnfojKA58itR6ThU38uQBNOWj8kjIVuLQ/UFTl1x/b56K9L/ABVKLbKtjM6kj0Ycqcutn5Vpmpiqv5c2n7fefCpPxLOFC3SzCs/qE+ISV1UeYpNKachZWVlZWVlZCynjIU45dhV3a4x9vWHaWFVxrnyujVY3sqIfhq1GWP1BVJtTMeqynTNanXGhO4iF8QJRuvXfJPZd+cm3991Zma92VRlBYN+wfbl13gVBuXFO6Kb9UoiAwK09hYmWeVInXnu6IvmeuXMVyZEPD6KO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";


const GLOBAL_CSS = `
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap');
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
:root{
  --bg:#F0F4F8;--surface:#FFFFFF;--surface2:#F7FAFC;--border:#D9E2EC;--border2:#BCCCDC;
  --txt:#102A43;--txt2:#334E68;--txt3:#627D98;--txt4:#9FB3C8;
  --blue:#0967D2;--blue-lt:#E8F1FD;--blue-md:#B6D0F7;
  --green:#0E8A5C;--green-lt:#E3F5EE;--green-md:#A8DECA;
  --amber:#B45309;--amber-lt:#FEF3C7;--amber-md:#FCD34D;
  --red:#C0392B;--red-lt:#FEE8E6;--red-md:#F9A8A0;
  --purple:#5521B5;--purple-lt:#EDE9FE;
  --shadow-sm:0 1px 3px rgba(16,42,67,.08),0 1px 2px rgba(16,42,67,.05);
  --shadow:0 4px 12px rgba(16,42,67,.10),0 2px 4px rgba(16,42,67,.06);
  --shadow-lg:0 10px 30px rgba(16,42,67,.12),0 4px 10px rgba(16,42,67,.08);
  --r:8px;--r2:12px;
  --font:'Plus Jakarta Sans',sans-serif;--mono:'JetBrains Mono',monospace;
}
body{font-family:var(--font);background:var(--bg);color:var(--txt);min-height:100vh;font-size:14px;-webkit-font-smoothing:antialiased}
::-webkit-scrollbar{width:5px;height:5px}::-webkit-scrollbar-track{background:var(--bg)}::-webkit-scrollbar-thumb{background:var(--border2);border-radius:3px}
.app{display:flex;min-height:100vh}
.sidebar{width:252px;min-height:100vh;background:var(--txt);display:flex;flex-direction:column;position:fixed;top:0;left:0;z-index:100;overflow:hidden}
.sidebar::before{content:'';position:absolute;top:-80px;right:-80px;width:200px;height:200px;border-radius:50%;background:rgba(9,103,210,.15);pointer-events:none}
.sb-brand{padding:26px 22px 18px;border-bottom:1px solid rgba(255,255,255,.08)}
.sb-logo{font-size:22px;font-weight:800;color:#fff;letter-spacing:-.5px}.sb-logo span{color:#4DB8FF}
.sb-sub{font-size:10px;color:rgba(255,255,255,.4);letter-spacing:2px;text-transform:uppercase;margin-top:3px;font-family:var(--mono)}
.sb-pill{display:inline-block;margin-top:10px;padding:3px 10px;background:rgba(9,103,210,.3);border:1px solid rgba(77,184,255,.3);border-radius:20px;font-size:9px;color:#4DB8FF;font-family:var(--mono);letter-spacing:1.5px}
.nav{padding:14px 0;flex:1}
.nav-lbl{padding:10px 22px 5px;font-size:9px;color:rgba(255,255,255,.3);letter-spacing:2px;text-transform:uppercase;font-family:var(--mono)}
.nav-item{display:flex;align-items:center;gap:11px;padding:11px 22px;cursor:pointer;transition:all .15s;border-left:3px solid transparent;color:rgba(255,255,255,.5);font-size:13.5px;font-weight:500;user-select:none}
.nav-item:hover{color:rgba(255,255,255,.8);background:rgba(255,255,255,.05)}
.nav-item.on{color:#fff;border-left-color:#4DB8FF;background:rgba(77,184,255,.12)}
.nav-ic{width:18px;text-align:center;flex-shrink:0}
.nav-badge{margin-left:auto;background:var(--red);color:#fff;border-radius:10px;font-size:10px;padding:1px 7px;font-weight:700;font-family:var(--mono)}
.sb-foot{padding:14px 22px;border-top:1px solid rgba(255,255,255,.08)}
.co-card{background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.1);border-radius:var(--r);padding:12px 14px}
.co-rfc{font-family:var(--mono);font-size:11px;color:#4DB8FF;font-weight:600}
.co-name{font-size:12px;color:rgba(255,255,255,.65);margin-top:2px}
.co-bar{display:flex;align-items:center;gap:8px;margin-top:10px}
.co-track{flex:1;height:4px;background:rgba(255,255,255,.1);border-radius:2px;overflow:hidden}
.co-fill{height:100%;border-radius:2px;transition:width .5s}
.co-pct{font-family:var(--mono);font-size:10px;font-weight:600}
.main{margin-left:252px;flex:1;display:flex;flex-direction:column}
.topbar{height:58px;background:var(--surface);border-bottom:1px solid var(--border);display:flex;align-items:center;justify-content:space-between;padding:0 30px;position:sticky;top:0;z-index:50;box-shadow:var(--shadow-sm)}
.tb-bc{display:flex;align-items:center;gap:8px}
.tb-sec{font-size:11px;color:var(--txt3);text-transform:uppercase;letter-spacing:1px}
.tb-sep{color:var(--border2);font-size:16px}
.tb-pg{font-weight:700;font-size:15px;color:var(--txt)}
.tb-right{display:flex;align-items:center;gap:10px}
.cloud-pill{display:flex;align-items:center;gap:7px;padding:6px 14px;background:var(--green-lt);border:1px solid var(--green-md);border-radius:20px;font-size:11px;color:var(--green);font-weight:600}
.cloud-dot{width:7px;height:7px;border-radius:50%;background:var(--green);animation:blink 2s infinite}
@keyframes blink{0%,100%{opacity:1}50%{opacity:.3}}
.content{padding:26px 30px;flex:1}
.page-hdr{margin-bottom:22px}
.page-title{font-size:22px;font-weight:800;color:var(--txt);letter-spacing:-.5px}
.page-sub{font-size:13px;color:var(--txt3);margin-top:3px}
.card{background:var(--surface);border:1px solid var(--border);border-radius:var(--r2);box-shadow:var(--shadow-sm);overflow:hidden}
.card-hdr{padding:15px 20px;border-bottom:1px solid var(--border);display:flex;align-items:center;justify-content:space-between}
.card-title{font-size:13px;font-weight:700;color:var(--txt)}
.card-sub{font-size:11px;color:var(--txt3);margin-top:2px}
.card-body{padding:20px}
.stat-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:14px;margin-bottom:22px}
.stat-card{background:var(--surface);border:1px solid var(--border);border-radius:var(--r2);padding:18px 20px;box-shadow:var(--shadow-sm);position:relative;overflow:hidden}
.stat-card::after{content:'';position:absolute;top:0;left:0;right:0;height:3px}
.stat-card.blue::after{background:var(--blue)}.stat-card.green::after{background:var(--green)}
.stat-card.amber::after{background:var(--amber)}.stat-card.red::after{background:var(--red)}
.stat-card.purple::after{background:var(--purple)}
.stat-ic{width:38px;height:38px;border-radius:var(--r);display:flex;align-items:center;justify-content:center;margin-bottom:12px}
.stat-ic.blue{background:var(--blue-lt);color:var(--blue)}.stat-ic.green{background:var(--green-lt);color:var(--green)}
.stat-ic.amber{background:var(--amber-lt);color:var(--amber)}.stat-ic.red{background:var(--red-lt);color:var(--red)}
.stat-ic.purple{background:var(--purple-lt);color:var(--purple)}
.stat-val{font-size:28px;font-weight:800;line-height:1;color:var(--txt);letter-spacing:-1px}
.stat-lbl{font-size:12px;color:var(--txt3);margin-top:4px;font-weight:500}
.stat-sub{font-size:11px;color:var(--txt4);margin-top:6px}
.g2{display:grid;grid-template-columns:1fr 1fr;gap:16px}
.g3{display:grid;grid-template-columns:1fr 1fr 1fr;gap:16px}
.badge{display:inline-flex;align-items:center;gap:5px;padding:3px 10px;border-radius:20px;font-size:11px;font-weight:600}
.bg{background:var(--green-lt);color:var(--green)}
.ba{background:var(--amber-lt);color:var(--amber)}
.br{background:var(--red-lt);color:var(--red)}
.bb{background:var(--blue-lt);color:var(--blue)}
.bgr{background:var(--surface2);color:var(--txt3);border:1px solid var(--border)}
.bp{background:var(--purple-lt);color:var(--purple)}
.btn{display:inline-flex;align-items:center;gap:7px;padding:9px 18px;border-radius:var(--r);font-size:13px;font-weight:600;cursor:pointer;border:none;transition:all .15s;font-family:var(--font);white-space:nowrap}
.btn-p{background:var(--blue);color:#fff;box-shadow:0 2px 6px rgba(9,103,210,.3)}.btn-p:hover{background:#0756BB}
.btn-s{background:var(--green);color:#fff;box-shadow:0 2px 6px rgba(14,138,92,.3)}.btn-s:hover{background:#0C7A51}
.btn-o{background:transparent;color:var(--txt2);border:1.5px solid var(--border)}.btn-o:hover{border-color:var(--border2);background:var(--surface2)}
.btn-d{background:var(--red-lt);color:var(--red);border:1.5px solid var(--red-md)}.btn-d:hover{background:#FCCEC9}
.btn-sm{padding:6px 13px;font-size:12px}.btn-xs{padding:4px 10px;font-size:11px}
.btn:disabled{opacity:.4;cursor:not-allowed}
.table{width:100%;border-collapse:collapse;font-size:13px}
.table th{padding:10px 15px;background:var(--surface2);color:var(--txt3);font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:.8px;text-align:left;border-bottom:1px solid var(--border)}
.table td{padding:12px 15px;border-bottom:1px solid var(--border);vertical-align:middle}
.table tbody tr:last-child td{border-bottom:none}.table tbody tr:hover td{background:var(--surface2)}
.progress{height:6px;background:var(--border);border-radius:3px;overflow:hidden}
.pf{height:100%;border-radius:3px;transition:width .6s ease}
.p-sm{height:4px}.p-lg{height:10px}
.form-group{margin-bottom:16px}
.form-lbl{display:block;font-size:11px;font-weight:600;color:var(--txt2);margin-bottom:5px;letter-spacing:.3px}
.form-input{width:100%;padding:9px 13px;background:var(--surface);border:1.5px solid var(--border);border-radius:var(--r);color:var(--txt);font-size:13px;font-family:var(--font);outline:none;transition:border .15s}
.form-input:focus{border-color:var(--blue);box-shadow:0 0 0 3px rgba(9,103,210,.1)}
.ptab{padding:6px 14px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;border:1.5px solid var(--border);color:var(--txt3);background:var(--surface);transition:all .15s}
.ptab:hover{border-color:var(--border2);color:var(--txt2)}
.ptab.sel{border-color:var(--blue);color:var(--blue);background:var(--blue-lt)}
.ptab.done{border-color:var(--green-md);color:var(--green);background:var(--green-lt)}
.doc-item{display:flex;align-items:center;gap:13px;padding:11px 15px;border:1.5px solid var(--border);border-radius:var(--r);background:var(--surface);transition:all .15s;margin-bottom:7px}
.doc-item:hover{border-color:var(--border2);box-shadow:var(--shadow-sm)}
.doc-item.aprobado{border-left:4px solid var(--green)}
.doc-item.revision{border-left:4px solid var(--amber)}
.doc-item.pendiente{border-left:4px solid var(--border2);background:var(--surface2)}
.doc-ic{width:36px;height:36px;border-radius:var(--r);display:flex;align-items:center;justify-content:center;flex-shrink:0}
.doc-info{flex:1;min-width:0}
.doc-name{font-weight:600;font-size:13px;color:var(--txt);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.doc-meta{font-size:11px;color:var(--txt3);margin-top:2px;font-family:var(--mono)}
.doc-acts{display:flex;align-items:center;gap:7px;flex-shrink:0}
.upload-zone{border:2px dashed var(--border2);border-radius:var(--r2);padding:36px 24px;text-align:center;cursor:pointer;transition:all .2s;background:var(--surface2)}
.upload-zone:hover{border-color:var(--blue);background:var(--blue-lt)}
.cat-hdr{display:flex;align-items:center;gap:10px;padding:10px 0 8px;border-bottom:2px solid var(--border);margin-bottom:10px}
.cat-dot{width:10px;height:10px;border-radius:50%;flex-shrink:0}
.cat-lbl{font-size:12px;font-weight:700;flex:1}
.cat-cnt{font-size:11px;color:var(--txt3);font-family:var(--mono)}
.modal-ov{position:fixed;inset:0;background:rgba(16,42,67,.5);z-index:200;display:flex;align-items:center;justify-content:center;backdrop-filter:blur(4px);animation:fadeIn .15s ease}
@keyframes fadeIn{from{opacity:0}to{opacity:1}}
.modal{background:var(--surface);border:1px solid var(--border);border-radius:var(--r2);width:520px;max-width:95vw;max-height:88vh;overflow-y:auto;box-shadow:var(--shadow-lg);animation:slideUp .2s ease}
@keyframes slideUp{from{transform:translateY(18px);opacity:0}to{transform:none;opacity:1}}
.modal-hdr{padding:20px 24px 16px;border-bottom:1px solid var(--border);display:flex;align-items:center;justify-content:space-between}
.modal-title{font-size:16px;font-weight:800;color:var(--txt)}
.modal-body{padding:20px 24px}
.modal-foot{padding:14px 24px;border-top:1px solid var(--border);display:flex;justify-content:flex-end;gap:8px}
.alert{display:flex;gap:11px;align-items:flex-start;padding:13px 15px;border-radius:var(--r);margin-bottom:13px;font-size:13px}
.alert-green{background:var(--green-lt);border:1px solid var(--green-md);color:var(--green)}
.alert-amber{background:var(--amber-lt);border:1px solid var(--amber-md);color:var(--amber)}
.alert-red{background:var(--red-lt);border:1px solid var(--red-md);color:var(--red)}
.alert-blue{background:var(--blue-lt);border:1px solid var(--blue-md);color:var(--blue)}
.alert-title{font-weight:700}.alert-desc{font-size:12px;opacity:.85;margin-top:2px}
.toast-wrap{position:fixed;bottom:22px;right:22px;z-index:400;display:flex;flex-direction:column;gap:8px}
.toast{display:flex;align-items:center;gap:11px;padding:12px 17px;border-radius:var(--r);min-width:270px;box-shadow:var(--shadow-lg);font-size:13px;font-weight:500;animation:toastIn .25s ease;border:1px solid}
@keyframes toastIn{from{transform:translateX(60px);opacity:0}to{transform:none;opacity:1}}
.toast-success{background:#fff;border-color:var(--green-md);color:var(--green)}
.toast-error{background:#fff;border-color:var(--red-md);color:var(--red)}
.toast-info{background:#fff;border-color:var(--blue-md);color:var(--blue)}
.toast-ic{width:26px;height:26px;border-radius:50%;display:flex;align-items:center;justify-content:center;flex-shrink:0}
.toast-success .toast-ic{background:var(--green-lt)}.toast-error .toast-ic{background:var(--red-lt)}.toast-info .toast-ic{background:var(--blue-lt)}
.sem{display:flex;align-items:center;gap:5px}
.sl{width:12px;height:12px;border-radius:50%;background:#E0E0E0}
.sl.on.sr{background:var(--red);box-shadow:0 0 8px rgba(192,57,43,.5)}
.sl.on.sy{background:var(--amber);box-shadow:0 0 8px rgba(180,83,9,.4)}
.sl.on.sg{background:var(--green);box-shadow:0 0 8px rgba(14,138,92,.5)}
.up-prog{background:var(--blue-lt);border:1px solid var(--blue-md);border-radius:var(--r);padding:9px 13px;margin-bottom:7px;display:flex;align-items:center;gap:11px;font-size:12px;color:var(--blue)}
.up-bar{flex:1;height:4px;background:var(--blue-md);border-radius:2px;overflow:hidden}
.up-fill{height:100%;background:var(--blue);border-radius:2px;transition:width .3s}
.cloud-info{display:flex;align-items:center;gap:8px;padding:9px 14px;background:var(--blue-lt);border:1px solid var(--blue-md);border-radius:var(--r);font-size:12px;color:var(--blue);font-weight:600;margin-bottom:14px}
.divider{height:1px;background:var(--border);margin:14px 0}
.flex{display:flex}.fc{flex-direction:column}.aic{align-items:center}.jb{justify-content:space-between}
.g4{gap:4px}.g8{gap:8px}.g12{gap:12px}.g16{gap:16px}.g24{gap:24px}
.mb8{margin-bottom:8px}.mb12{margin-bottom:12px}.mb16{margin-bottom:16px}.mb22{margin-bottom:22px}.mb24{margin-bottom:24px}
.mt8{margin-top:8px}.mt12{margin-top:12px}.mt16{margin-top:16px}
.f1{flex:1}.w100{width:100%}.tr{text-align:right}
.mono{font-family:var(--mono)}.t11{font-size:11px}.t12{font-size:12px}.t13{font-size:13px}
.muted{color:var(--txt3)}.dim{color:var(--txt4)}.fw7{font-weight:700}
.trunc{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.cur{cursor:pointer}
`;

const Ic = ({ d, s = 16, c = "currentColor", sw = 2 }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round">
    <path d={d} />
  </svg>
);

const I = {
  shield:  "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
  upload:  "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M17 8l-5-5-5 5M12 3v12",
  check:   "M20 6L9 17l-5-5",
  x:       "M18 6L6 18M6 6l12 12",
  clock:   "M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2zM12 6v6l4 2",
  send:    "M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z",
  file:    "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zM14 2v6h6",
  folder:  "M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z",
  alert:   "M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0zM12 9v4M12 17h.01",
  plus:    "M12 5v14M5 12h14",
  mail:    "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2zM22 6l-10 7L2 6",
  chart:   "M18 20V10M12 20V4M6 20v-4",
  eye:     "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8zM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6z",
  building:"M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
  cloud:   "M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z",
  download:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3",
  refresh: "M23 4v6h-6M1 20v-6h6M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15",
  link:    "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",
  trash:   "M3 6h18M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6M10 11v6M14 11v6",
  info:    "M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2zM12 16v-4M12 8h.01",
  star:    "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z",
  package: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16zM3.27 6.96L12 12.01l8.73-5.05M12 22.08V12",
};

const MESES = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];

const CAT = {
  fiscal:  { label: "Cumplimiento Fiscal Federal",          color: "#0967D2", bg: "#E8F1FD" },
  imss:    { label: "Seguridad Social — IMSS",              color: "#5521B5", bg: "#EDE9FE" },
  laboral: { label: "Nómina CFDI — 6 Trabajadores (Zentric)", color: "#0E7490", bg: "#E0F2FE" },
  estatal: { label: "Impuesto Estatal — ISN",               color: "#0E8A5C", bg: "#E3F5EE" },
  corp:    { label: "Corporativo & Legal",                  color: "#B45309", bg: "#FEF3C7" },
};

// Trabajadores registrados en Zentric
const TRABAJADORES = [
  { id:"w1", nombre:"Sergio Santibáñez",  puesto:"Operador",          salario:3500 },
  { id:"w2", nombre:"Ángel Rodríguez",    puesto:"Operador",          salario:2950 },
  { id:"w3", nombre:"Juan Sariñana",      puesto:"Técnico",           salario:4500 },
  { id:"w4", nombre:"Rolando Rodríguez",  puesto:"Supervisor",        salario:3000 },
  { id:"w5", nombre:"Hugo de Alba",       puesto:"Técnico Especialista", salario:3600 },
  { id:"w6", nombre:"Trabajador 6",       puesto:"Operador",          salario:3200 },
];

// Docs estáticos (no-nómina)
const DOCS_BASE = [
  { id: "sat_op",    cat: "fiscal",  label: "Opinión de Cumplimiento SAT",       req: true  },
  { id: "sat_decl",  cat: "fiscal",  label: "Declaración Mensual ISR / IVA",     req: true  },
  { id: "sat_pago",  cat: "fiscal",  label: "Comprobante de Pago SAT",           req: true  },
  { id: "sat_acuse", cat: "fiscal",  label: "Acuse de Declaración SAT",          req: true  },
  { id: "imss_op",   cat: "imss",    label: "Opinión de Cumplimiento IMSS",      req: true  },
  { id: "imss_det",  cat: "imss",    label: "SUA — Cédula de Determinación",     req: true  },
  { id: "imss_liq",  cat: "imss",    label: "SUA — Cédula de Liquidación",       req: true  },
  { id: "sipare",    cat: "imss",    label: "SIPARE — Comprobante de Pago",      req: true  },
  { id: "isn_pago",  cat: "estatal", label: "ISN — Comprobante de Pago",         req: true  },
  { id: "isn_decl",  cat: "estatal", label: "ISN — Declaración Mensual",         req: true  },
  { id: "repse",     cat: "corp",    label: "Constancia REPSE Vigente",          req: true  },
  { id: "csf",       cat: "corp",    label: "Constancia de Situación Fiscal",    req: true  },
  { id: "acta",      cat: "corp",    label: "Acta Constitutiva",                 req: false },
  { id: "poder",     cat: "corp",    label: "Poder Notarial del Representante",  req: false },
  { id: "rc",        cat: "corp",    label: "Póliza de Responsabilidad Civil",   req: true  },
];

// Generar docs de nómina por cada trabajador (PDF + XML)
const DOCS_NOMINA = TRABAJADORES.flatMap(t => [
  { id:`nom_pdf_${t.id}`, cat:"laboral", label:`CFDI PDF — ${t.nombre}`, req:true,  tipo:"pdf", wid:t.id },
  { id:`nom_xml_${t.id}`, cat:"laboral", label:`CFDI XML — ${t.nombre}`, req:true,  tipo:"xml", wid:t.id },
]);

const DOCS = [...DOCS_BASE, ...DOCS_NOMINA];

const mkDoc = () => {
  const d = {};
  DOCS.forEach(def => {
    const loaded = Math.random() > 0.42;
    const ext = def.tipo==="xml" ? "xml" : "pdf";
    d[def.id] = {
      status: loaded ? (Math.random() > 0.2 ? "aprobado" : "revision") : "pendiente",
      nombre: loaded ? `${def.id}_2026.${ext}` : null,
      fecha: loaded ? `2026-02-${String(Math.floor(Math.random()*20)+1).padStart(2,"0")}` : null,
      size: loaded ? `${(Math.random()*2.5+.3).toFixed(1)} MB` : null,
      url: loaded ? `https://storage.micsa.com/repse/${def.id}_${Math.floor(Math.random()*9000+1000)}.pdf` : null,
      by: loaded ? "admin@micsa.com" : null,
    };
  });
  return d;
};

const initPer = () => {
  const p = {};
  [2025,2026].forEach(y => MESES.forEach((_,mi) => {
    p[`${y}-${String(mi+1).padStart(2,"0")}`] = { docs: mkDoc(), enviado: Math.random()>.65 };
  }));
  return p;
};

const CLIENTES = [
  { id:1, nombre:"Ironcast",  email:"compliance@ironcast.com",   dia:20, color:"#0967D2", activo:true },
  { id:2, nombre:"Carrier",   email:"compliance@carrier.com",    dia:17, color:"#5521B5", activo:true },
  { id:3, nombre:"Ternium",   email:"repse@ternium.com.mx",      dia:15, color:"#0E8A5C", activo:true },
  { id:4, nombre:"AHMSA",     email:"documentos@ahmsa.com",      dia:25, color:"#B45309", activo:false },
];

const pct = (p) => {
  if (!p) return 0;
  const r = DOCS.filter(d=>d.req);
  return Math.round(r.filter(d=>p.docs[d.id]?.status==="aprobado").length/r.length*100);
};
const pColor = (v) => v>=100?"var(--green)":v>=60?"var(--amber)":"var(--red)";
const pBadge = (v) => v>=100?"bg":v>=60?"ba":"br";

let _tid=0;

const Semaforo = ({v}) => {
  const s = v>=100?"g":v>=60?"y":"r";
  return <div className="sem"><div className={`sl sr ${s==="r"?"on":""}`}/><div className={`sl sy ${s==="y"?"on":""}`}/><div className={`sl sg ${s==="g"?"on":""}`}/></div>;
};

// ── DASHBOARD ─────────────────────────────────────────────────────────────────
const Dashboard = ({periodos, clientes}) => {
  const now = new Date();
  const mk = `${now.getFullYear()}-${String(now.getMonth()+1).padStart(2,"0")}`;
  const per = periodos[mk];
  const v = pct(per);
  const totalOk = Object.values(periodos).reduce((a,p)=>a+Object.values(p.docs).filter(d=>d.status==="aprobado").length,0);
  const totalPend = Object.values(periodos).reduce((a,p)=>a+DOCS.filter(d=>d.req&&p.docs[d.id]?.status!=="aprobado").length,0);
  const totalNube = Object.values(periodos).reduce((a,p)=>a+Object.values(p.docs).filter(d=>d.url).length,0);

  const hist = Array.from({length:6},(_,i)=>{
    const d=new Date(now.getFullYear(),now.getMonth()-5+i,1);
    const k=`${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,"0")}`;
    return {label:MESES[d.getMonth()].slice(0,3),v:pct(periodos[k])};
  });

  const catRows = Object.entries(CAT).map(([id,def])=>{
    const ds=DOCS.filter(d=>d.cat===id&&d.req);
    const ok=ds.filter(d=>per?.docs[d.id]?.status==="aprobado").length;
    return {id,def,ok,total:ds.length,v:ds.length?Math.round(ok/ds.length*100):0};
  });

  return (
    <div>
      <div className="stat-grid">
        {[
          {lbl:"Cumplimiento del Mes", val:`${v}%`,  sub:MESES[now.getMonth()]+" "+now.getFullYear(), col:"blue",  ic:I.chart,   vc:pColor(v)},
          {lbl:"Archivos en la Nube",  val:totalNube, sub:"documentos almacenados",                   col:"purple",ic:I.cloud,   vc:"var(--txt)"},
          {lbl:"Documentos Aprobados", val:totalOk,   sub:"total histórico",                          col:"green", ic:I.check,   vc:"var(--txt)"},
          {lbl:"Pendientes Requeridos",val:totalPend, sub:"requieren carga",                          col:totalPend>0?"red":"green",ic:I.alert,vc:totalPend>0?"var(--red)":"var(--green)"},
        ].map((s,i)=>(
          <div key={i} className={`stat-card ${s.col}`}>
            <div className={`stat-ic ${s.col}`}><Ic d={s.ic} s={19}/></div>
            <div className="stat-val" style={{color:s.vc}}>{s.val}</div>
            <div className="stat-lbl">{s.lbl}</div>
            <div className="stat-sub">{s.sub}</div>
          </div>
        ))}
      </div>

      <div className="g2 mb22">
        <div className="card">
          <div className="card-hdr">
            <div><div className="card-title">Cumplimiento — {MESES[now.getMonth()]} {now.getFullYear()}</div><div className="card-sub">Documentos requeridos aprobados</div></div>
            <Semaforo v={v}/>
          </div>
          <div className="card-body">
            <div className="flex aic g12 mb16">
              <div className="progress p-lg f1"><div className="pf" style={{width:`${v}%`,background:pColor(v)}}/></div>
              <span style={{fontWeight:800,fontSize:20,color:pColor(v),minWidth:46}}>{v}%</span>
            </div>
            {catRows.map(({id,def,ok,total,v:cv})=>(
              <div key={id} className="mb12">
                <div className="flex jb mb8" style={{marginBottom:5}}>
                  <span style={{fontSize:12,fontWeight:600,color:def.color}}>{def.label}</span>
                  <span className="mono t11 muted">{ok}/{total}</span>
                </div>
                <div className="progress"><div className="pf" style={{width:`${cv}%`,background:def.color}}/></div>
              </div>
            ))}
            <div className="mt16">
              {v>=100
                ?<div className="alert alert-green" style={{margin:0}}><Ic d={I.check} s={16}/><div><div className="alert-title">Expediente Completo</div><div className="alert-desc">Listo para enviar a clientes</div></div></div>
                :<div className="alert alert-amber" style={{margin:0}}><Ic d={I.alert} s={16}/><div><div className="alert-title">{DOCS.filter(d=>d.req&&per?.docs[d.id]?.status!=="aprobado").length} documentos pendientes</div><div className="alert-desc">Completa los documentos para habilitar envío a clientes</div></div></div>
              }
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-hdr"><div><div className="card-title">Historial — Últimos 6 Meses</div><div className="card-sub">% cumplimiento mensual</div></div></div>
          <div className="card-body">
            <div style={{display:"flex",alignItems:"flex-end",gap:10,height:130,marginBottom:8}}>
              {hist.map((m,i)=>(
                <div key={i} style={{flex:1,display:"flex",flexDirection:"column",alignItems:"center",gap:5}}>
                  <span style={{fontSize:10,fontWeight:700,color:pColor(m.v),fontFamily:"var(--mono)"}}>{m.v}%</span>
                  <div style={{flex:1,width:"100%",background:"var(--surface2)",border:"1px solid var(--border)",borderRadius:6,overflow:"hidden",display:"flex",alignItems:"flex-end",minHeight:8}}>
                    <div style={{width:"100%",height:`${m.v}%`,background:pColor(m.v),opacity:.85,minHeight:m.v>0?4:0}}/>
                  </div>
                  <span style={{fontSize:11,color:"var(--txt3)",fontWeight:600}}>{m.label}</span>
                </div>
              ))}
            </div>
            <div className="divider"/>
            <div className="cloud-info" style={{marginBottom:10}}>
              <Ic d={I.cloud} s={14}/>
              <span>Cloud activo — {totalNube} archivos sincronizados en storage.micsa.com</span>
            </div>
            <div style={{display:"flex",gap:8}}>
              {[["Almacenamiento",`${(totalNube*1.4).toFixed(1)} MB`,"usado de 50 GB"],["Períodos Activos","24","meses con documentos"]].map(([l,v,s])=>(
                <div key={l} style={{flex:1,background:"var(--surface2)",border:"1px solid var(--border)",borderRadius:8,padding:"10px 14px"}}>
                  <div className="t11 muted mono" style={{marginBottom:3}}>{l.toUpperCase()}</div>
                  <div style={{fontWeight:700,fontSize:16}}>{v}</div>
                  <div className="t11 muted">{s}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-hdr"><div><div className="card-title">Estado por Cliente</div><div className="card-sub">Cumplimiento del mes actual</div></div></div>
        <table className="table">
          <thead><tr><th>CLIENTE</th><th>CORREO</th><th>DÍA LÍMITE</th><th>CUMPLIMIENTO</th><th>ESTADO</th><th>SEMÁFORO</th></tr></thead>
          <tbody>
            {clientes.filter(c=>c.activo).map(c=>(
              <tr key={c.id}>
                <td><div className="flex aic g8"><div style={{width:10,height:10,borderRadius:"50%",background:c.color,flexShrink:0}}/><span className="fw7">{c.nombre}</span></div></td>
                <td className="mono t11 muted">{c.email}</td>
                <td><span className="badge bgr">Día {c.dia}</span></td>
                <td><div className="flex aic g8" style={{minWidth:110}}><div className="progress f1"><div className="pf" style={{width:`${v}%`,background:pColor(v)}}/></div><span className="mono t11" style={{color:pColor(v),fontWeight:700}}>{v}%</span></div></td>
                <td><span className={`badge ${pBadge(v)}`}>{v>=100?"✓ Listo":v>=60?"En proceso":"Incompleto"}</span></td>
                <td><Semaforo v={v}/></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// ── DOCUMENTOS ────────────────────────────────────────────────────────────────
const DocItem = ({d, def, per, uploading, sel, setSel, fileRef, aprobar, rechazar}) => {
  const doc = per?.docs[d.id];
  const status = doc?.status || "pendiente";
  const sBadge=(s)=>{
    if(s==="aprobado")return <span className="badge bg"><Ic d={I.check} s={10}/>Aprobado</span>;
    if(s==="revision")return <span className="badge ba"><Ic d={I.eye} s={10}/>En Revisión</span>;
    return <span className="badge bgr"><Ic d={I.clock} s={10}/>Sin cargar</span>;
  };
  const isXml = d.tipo==="xml";
  return (
    <div>
      {uploading[d.id]!==undefined&&(
        <div className="up-prog"><Ic d={I.cloud} s={14}/><span style={{flex:"0 0 auto"}}>Subiendo a la nube...</span><div className="up-bar"><div className="up-fill" style={{width:`${uploading[d.id]}%`}}/></div><span className="mono t11">{uploading[d.id]}%</span></div>
      )}
      <div className={`doc-item ${status}`}>
        <div className="doc-ic" style={{background: isXml?"#FEF3C7":def.bg, color: isXml?"#B45309":def.color}}>
          <Ic d={doc?.url?I.cloud:(isXml?I.package:I.file)} s={17}/>
        </div>
        <div className="doc-info" onClick={()=>doc?.nombre&&setSel({...d,doc})} style={{cursor:doc?.nombre?"pointer":"default"}}>
          <div className="doc-name">{d.label}</div>
          <div className="doc-meta">
            {doc?.url?<><span style={{color:"var(--blue)"}}>☁ En nube</span> · {doc.fecha} · {doc.size}</>:d.req?"Requerido — sin cargar":"Opcional"}
          </div>
        </div>
        <div className="doc-acts">
          {sBadge(status)}
          {isXml&&<span style={{fontSize:10,fontWeight:600,color:"#B45309",background:"#FEF3C7",padding:"2px 7px",borderRadius:4}}>XML</span>}
          {doc?.url&&<button className="btn btn-o btn-xs"><Ic d={I.link} s={11}/>Ver</button>}
          <button className="btn btn-p btn-xs" onClick={()=>{activeDocId.current=d.id;fileRef.current.click();}}><Ic d={I.upload} s={11}/>Subir</button>
        </div>
      </div>
    </div>
  );
};

const Documentos = ({periodos, setPeriodos, addToast}) => {
  const now = new Date();
  const [yr,setYr]=useState(now.getFullYear());
  const [mes,setMes]=useState(now.getMonth());
  const [filtro,setFiltro]=useState("todos");
  const [sel,setSel]=useState(null);
  const [uploading,setUploading]=useState({});
  const fileRef=useRef();
  const activeDocId=useRef(null);

  const mk=`${yr}-${String(mes+1).padStart(2,"0")}`;
  const per=periodos[mk];
  const v=pct(per);

  const simUp=(docId,file)=>{
    setUploading(p=>({...p,[docId]:0}));
    let pg=0;
    const ext=file.name.split(".").pop().toLowerCase();
    const iv=setInterval(()=>{
      pg+=Math.random()*25+10;
      if(pg>=100){
        pg=100;clearInterval(iv);
        const url=`https://storage.micsa.com/repse/${mk}/${docId}_${Date.now()}.${ext}`;
        setPeriodos(p=>({...p,[mk]:{...p[mk],docs:{...p[mk].docs,[docId]:{status:"revision",nombre:file.name,fecha:new Date().toISOString().split("T")[0],size:`${(file.size/1048576||0.8).toFixed(1)} MB`,url,by:"admin@micsa.com"}}}}));
        setUploading(p=>{const n={...p};delete n[docId];return n;});
        addToast("success",`"${file.name}" subido a la nube ✓`);
      } else {
        setUploading(p=>({...p,[docId]:Math.round(pg)}));
      }
    },100);
  };

  const onFile=(e,did)=>{const f=e.target.files?.[0];if(!f)return;simUp(did,f);e.target.value="";};

  const aprobar=(id)=>{
    setPeriodos(p=>({...p,[mk]:{...p[mk],docs:{...p[mk].docs,[id]:{...p[mk].docs[id],status:"aprobado"}}}}));
    addToast("success",`${DOCS.find(d=>d.id===id)?.label} — Aprobado`);setSel(null);
  };
  const rechazar=(id)=>{
    setPeriodos(p=>({...p,[mk]:{...p[mk],docs:{...p[mk].docs,[id]:{status:"pendiente",nombre:null,fecha:null,size:null,url:null,by:null}}}}));
    addToast("error",`${DOCS.find(d=>d.id===id)?.label} — Rechazado`);setSel(null);
  };

  const nubeCount=DOCS.reduce((a,d)=>a+(per?.docs[d.id]?.url?1:0),0);

  // Grupos sin laboral
  const gruposBase = Object.entries(CAT)
    .filter(([cid])=>cid!=="laboral")
    .map(([cid,def])=>({cid,def,docs:DOCS_BASE.filter(d=>d.cat===cid).map(d=>({...d,doc:per?.docs[d.id]}))}));

  // Resumen nómina total
  const totalSalarios = TRABAJADORES.reduce((a,t)=>a+t.salario,0);
  const nomWorkersStatus = TRABAJADORES.map(t=>{
    const pdf = per?.docs[`nom_pdf_${t.id}`];
    const xml = per?.docs[`nom_xml_${t.id}`];
    const pdfOk = pdf?.status==="aprobado";
    const xmlOk = xml?.status==="aprobado";
    const pdfUp = !!pdf?.url;
    const xmlUp = !!xml?.url;
    return {...t,pdfOk,xmlOk,pdfUp,xmlUp,complete:pdfOk&&xmlOk};
  });
  const nomComplete = nomWorkersStatus.filter(w=>w.complete).length;
  const defLaboral = CAT.laboral;

  return (
    <div>
      <input ref={fileRef} type="file" accept=".pdf,.xml" style={{display:"none"}} onChange={e=>onFile(e,activeDocId.current)}/>

      {/* PERÍODO */}
      <div className="card mb16">
        <div className="card-body">
          <div className="flex g24 aic mb16">
            <div>
              <div className="form-lbl">AÑO</div>
              <div className="flex g8">{[2025,2026].map(y=><button key={y} className={`ptab ${yr===y?"sel":""}`} onClick={()=>setYr(y)}>{y}</button>)}</div>
            </div>
            <div style={{flex:1}}>
              <div className="form-lbl">PERÍODO MENSUAL</div>
              <div className="flex" style={{gap:5,flexWrap:"wrap"}}>
                {MESES.map((m,i)=>{
                  const k=`${yr}-${String(i+1).padStart(2,"0")}`;
                  const cv=pct(periodos[k]);
                  return <button key={i} className={`ptab ${mes===i?"sel":""} ${cv>=100?"done":""}`} onClick={()=>setMes(i)}>{m.slice(0,3).toUpperCase()}</button>;
                })}
              </div>
            </div>
          </div>
          <div style={{background:"var(--surface2)",borderRadius:10,padding:"13px 17px",border:"1px solid var(--border)"}}>
            <div className="flex jb aic mb8">
              <div className="flex aic g12"><Semaforo v={v}/><span style={{fontWeight:800,fontSize:18,color:pColor(v)}}>{v}%</span><span style={{fontWeight:600,color:"var(--txt2)"}}>{MESES[mes]} {yr}</span></div>
              <div className="flex aic g8">
                <span className="badge bb"><Ic d={I.cloud} s={10}/>{nubeCount} en nube</span>
                {v>=100&&<span className="badge bg"><Ic d={I.check} s={10}/>Expediente Listo</span>}
              </div>
            </div>
            <div className="progress p-lg"><div className="pf" style={{width:`${v}%`,background:pColor(v)}}/></div>
          </div>
        </div>
      </div>

      <div className="cloud-info">
        <Ic d={I.cloud} s={16}/>
        <span style={{flex:1}}>Cloud Storage activo — <strong>storage.micsa.com/repse/{mk}/</strong></span>
        <span className="mono t11">{nubeCount} archivos sincronizados</span>
      </div>

      {/* GRUPOS BASE */}
      {gruposBase.map(({cid,def,docs})=>{
        const catOk=docs.filter(d=>d.doc?.status==="aprobado").length;
        return (
          <div key={cid} className="mb24">
            <div className="cat-hdr">
              <div className="cat-dot" style={{background:def.color}}/>
              <span className="cat-lbl" style={{color:def.color}}>{def.label}</span>
              <div className="progress" style={{width:80}}><div className="pf" style={{width:`${docs.length?(catOk/docs.length)*100:0}%`,background:def.color}}/></div>
              <span className="cat-cnt">{catOk}/{docs.length}</span>
            </div>
            {docs.map(d=>(
              <DocItem key={d.id} d={d} def={def} per={per} uploading={uploading} sel={sel} setSel={setSel} fileRef={fileRef} aprobar={aprobar} rechazar={rechazar}/>
            ))}
          </div>
        );
      })}

      {/* NÓMINA — sección especial por trabajador */}
      <div className="mb24">
        <div className="cat-hdr">
          <div className="cat-dot" style={{background:defLaboral.color}}/>
          <span className="cat-lbl" style={{color:defLaboral.color}}>{defLaboral.label}</span>
          <div className="progress" style={{width:80}}><div className="pf" style={{width:`${(nomComplete/TRABAJADORES.length)*100}%`,background:defLaboral.color}}/></div>
          <span className="cat-cnt">{nomComplete}/{TRABAJADORES.length} completos</span>
        </div>

        {/* Resumen nómina */}
        <div style={{background:"#E0F2FE",border:"1px solid #BAE6FD",borderRadius:10,padding:"13px 16px",marginBottom:12,display:"flex",alignItems:"center",gap:16,flexWrap:"wrap"}}>
          <div style={{display:"flex",alignItems:"center",gap:8}}>
            <Ic d={I.star} s={15} c="#0E7490"/>
            <span style={{fontSize:12,fontWeight:700,color:"#0E7490"}}>Zentric · CFDI Nómina</span>
          </div>
          <div className="flex aic g8 mono t11" style={{color:"#0E7490"}}>
            <span>6 trabajadores</span>
            <span style={{opacity:.4}}>|</span>
            <span>Total nómina: ${totalSalarios.toLocaleString()}/mes</span>
            <span style={{opacity:.4}}>|</span>
            <span>{nomComplete*2}/{TRABAJADORES.length*2} archivos OK</span>
          </div>
          <div style={{marginLeft:"auto"}}>
            <span className={`badge ${nomComplete===TRABAJADORES.length?"bg":nomComplete>0?"ba":"br"}`}>
              {nomComplete===TRABAJADORES.length?"✓ Nómina Completa":`${nomComplete}/${TRABAJADORES.length} trabajadores`}
            </span>
          </div>
        </div>

        {/* Por trabajador */}
        {nomWorkersStatus.map(w=>{
          const pdfDoc = DOCS_NOMINA.find(d=>d.id===`nom_pdf_${w.id}`);
          const xmlDoc = DOCS_NOMINA.find(d=>d.id===`nom_xml_${w.id}`);
          return (
            <div key={w.id} style={{marginBottom:14,border:`1.5px solid ${w.complete?"#A8DECA":w.pdfUp||w.xmlUp?"#FCD34D":"var(--border)"}`,borderRadius:10,overflow:"hidden",background:"var(--surface)"}}>
              {/* Header trabajador */}
              <div style={{display:"flex",alignItems:"center",gap:12,padding:"10px 15px",background:w.complete?"#E3F5EE":w.pdfUp||w.xmlUp?"#FEF3C7":"var(--surface2)",borderBottom:"1px solid var(--border)"}}>
                <div style={{width:34,height:34,borderRadius:"50%",background:defLaboral.color+"22",border:`2px solid ${defLaboral.color}`,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,fontWeight:800,fontSize:13,color:defLaboral.color}}>
                  {w.nombre.charAt(0)}
                </div>
                <div style={{flex:1}}>
                  <div style={{fontWeight:700,fontSize:13}}>{w.nombre}</div>
                  <div style={{fontSize:11,color:"var(--txt3)"}}>{w.puesto} · <span className="mono">${w.salario.toLocaleString()}/mes</span></div>
                </div>
                <div style={{display:"flex",gap:6,alignItems:"center"}}>
                  <span style={{fontSize:10,fontWeight:600,padding:"2px 8px",borderRadius:4,background:w.pdfOk?"var(--green-lt)":w.pdfUp?"var(--amber-lt)":"var(--surface)",color:w.pdfOk?"var(--green)":w.pdfUp?"var(--amber)":"var(--txt4)",border:`1px solid ${w.pdfOk?"var(--green-md)":w.pdfUp?"var(--amber-md)":"var(--border)"}`}}>PDF</span>
                  <span style={{fontSize:10,fontWeight:600,padding:"2px 8px",borderRadius:4,background:w.xmlOk?"var(--green-lt)":w.xmlUp?"var(--amber-lt)":"var(--surface)",color:w.xmlOk?"var(--green)":w.xmlUp?"var(--amber)":"var(--txt4)",border:`1px solid ${w.xmlOk?"var(--green-md)":w.xmlUp?"var(--amber-md)":"var(--border)"}`}}>XML</span>
                  {w.complete&&<span className="badge bg" style={{fontSize:10}}>✓ Completo</span>}
                </div>
              </div>
              {/* Docs del trabajador */}
              <div style={{padding:"8px 15px 10px"}}>
                {[pdfDoc,xmlDoc].filter(Boolean).map(d=>(
                  <DocItem key={d.id} d={d} def={defLaboral} per={per} uploading={uploading} sel={sel} setSel={setSel} fileRef={fileRef} aprobar={aprobar} rechazar={rechazar}/>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {tab==="generador"&&(
        <GeneradorContrato addToast={addToast}/>
      )}

      {sel&&(
        <div className="modal-ov" onClick={()=>setSel(null)}>
          <div className="modal" onClick={e=>e.stopPropagation()}>
            <div className="modal-hdr">
              <div><div className="modal-title">{sel.label}</div><div style={{fontSize:12,color:"var(--txt3)",marginTop:3}}>{MESES[mes]} {yr}</div></div>
              <button className="btn btn-o btn-sm" onClick={()=>setSel(null)}><Ic d={I.x} s={13}/></button>
            </div>
            <div className="modal-body">
              {sel.doc?.url&&<div className="alert alert-blue mb16"><Ic d={I.cloud} s={16}/><div><div className="alert-title">Guardado en la Nube</div><div className="alert-desc mono" style={{wordBreak:"break-all",fontSize:10}}>{sel.doc.url}</div></div></div>}
              <div className="g2" style={{gap:12,marginBottom:14}}>
                {[["Archivo",sel.doc?.nombre||"—"],["Fecha",sel.doc?.fecha||"—"],["Tamaño",sel.doc?.size||"—"],["Subido por",sel.doc?.by||"—"]].map(([l,v])=>(
                  <div key={l} style={{background:"var(--surface2)",border:"1px solid var(--border)",borderRadius:8,padding:"11px 13px"}}>
                    <div className="form-lbl">{l}</div>
                    <div style={{fontSize:13,fontWeight:500}}>{v}</div>
                  </div>
                ))}
              </div>
              <div style={{background:"var(--surface2)",border:"1px solid var(--border)",borderRadius:8,padding:"11px 13px"}}>
                <div className="form-lbl">ESTADO</div>
                {sel.doc?.status==="aprobado"?<span className="badge bg"><Ic d={I.check} s={10}/>Aprobado</span>:<span className="badge ba"><Ic d={I.eye} s={10}/>Pendiente de Aprobación</span>}
              </div>
            </div>
            <div className="modal-foot">
              <button className="btn btn-d btn-sm" onClick={()=>rechazar(sel.id)}><Ic d={I.trash} s={13}/>Rechazar</button>
              {sel.doc?.status!=="aprobado"&&<button className="btn btn-s btn-sm" onClick={()=>aprobar(sel.id)}><Ic d={I.check} s={13}/>Aprobar</button>}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// ── NUBE ──────────────────────────────────────────────────────────────────────
const Nube = ({periodos}) => {
  const totalNube=Object.values(periodos).reduce((a,p)=>a+Object.values(p.docs).filter(d=>d.url).length,0);
  const totalMB=(totalNube*1.4).toFixed(1);
  const files=[];
  Object.entries(periodos).forEach(([k,p])=>{
    Object.entries(p.docs).forEach(([id,d])=>{
      if(d.url){const def=DOCS.find(x=>x.id===id);if(def)files.push({...d,label:def.label,cat:def.cat,key:k});}
    });
  });
  files.sort(()=>Math.random()-.5);
  const recent=files.slice(0,12);

  return (
    <div>
      <div className="g3 mb22">
        {[
          {ic:I.cloud,   lbl:"Archivos en Nube",    val:totalNube,     col:"blue",   sub:"documentos almacenados"},
          {ic:I.package, lbl:"Almacenamiento Usado", val:`${totalMB} MB`, col:"purple", sub:"de 50 GB disponibles"},
          {ic:I.folder,  lbl:"Períodos con Archivos",val:Object.values(periodos).filter(p=>Object.values(p.docs).some(d=>d.url)).length,col:"green",sub:"meses archivados"},
        ].map((s,i)=>(
          <div key={i} className={`stat-card ${s.col}`}>
            <div className={`stat-ic ${s.col}`}><Ic d={s.ic} s={19}/></div>
            <div className="stat-val">{s.val}</div>
            <div className="stat-lbl">{s.lbl}</div>
            <div className="stat-sub">{s.sub}</div>
          </div>
        ))}
      </div>

      <div className="card mb16">
        <div className="card-hdr">
          <div><div className="card-title">Estado del Almacenamiento</div><div className="card-sub">storage.micsa.com — Cloud Storage</div></div>
          <div className="cloud-pill"><div className="cloud-dot"/>Activo y Sincronizado</div>
        </div>
        <div className="card-body">
          <div className="flex aic g16 mb16">
            <div style={{flex:1}}>
              <div className="flex jb mb8" style={{marginBottom:6}}><span className="fw7 t13">Espacio utilizado</span><span className="mono t11 muted">{totalMB} MB de 50,000 MB</span></div>
              <div className="progress p-lg"><div className="pf" style={{width:`${(parseFloat(totalMB)/50000)*100}%`,background:"var(--blue)"}}/></div>
              <div style={{fontSize:11,color:"var(--txt3)",marginTop:5}}>{(50000-parseFloat(totalMB)).toFixed(1)} MB disponibles</div>
            </div>
          </div>
          <div className="g3">
            {[["PDF","📄",Math.floor(totalNube*.7)],["XML","📋",Math.floor(totalNube*.2)],["Otros","📎",Math.floor(totalNube*.1)]].map(([l,ic,c])=>(
              <div key={l} style={{background:"var(--surface2)",border:"1px solid var(--border)",borderRadius:8,padding:"14px 16px",textAlign:"center"}}>
                <div style={{fontSize:24,marginBottom:5}}>{ic}</div>
                <div style={{fontWeight:700,fontSize:18}}>{c}</div>
                <div className="t11 muted">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-hdr"><div className="card-title">Archivos Recientes en la Nube</div><button className="btn btn-o btn-sm"><Ic d={I.refresh} s={13}/>Actualizar</button></div>
        <table className="table">
          <thead><tr><th>DOCUMENTO</th><th>PERÍODO</th><th>CATEGORÍA</th><th>TAMAÑO</th><th>URL NUBE</th><th>ACCIÓN</th></tr></thead>
          <tbody>
            {recent.map((d,i)=>{
              const [y,m]=d.key.split("-");
              return (
                <tr key={i}>
                  <td>
                    <div className="flex aic g8">
                      <div style={{width:30,height:30,borderRadius:6,background:"var(--blue-lt)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}><Ic d={I.file} s={14} c="var(--blue)"/></div>
                      <div><div className="fw7 t12 trunc" style={{maxWidth:180}}>{d.label}</div><div className="mono t11 muted trunc" style={{maxWidth:180}}>{d.nombre?.slice(0,24)}...</div></div>
                    </div>
                  </td>
                  <td className="mono t11">{MESES[parseInt(m)-1]?.slice(0,3)} {y}</td>
                  <td><span style={{fontSize:10,fontWeight:600,color:CAT[d.cat]?.color,background:CAT[d.cat]?.bg,padding:"2px 7px",borderRadius:4}}>{CAT[d.cat]?.label?.split(" ")[0]}</span></td>
                  <td className="mono t11 muted">{d.size}</td>
                  <td className="mono t11" style={{color:"var(--blue)",maxWidth:160}}><span className="trunc" style={{display:"block"}}>{d.url?.slice(0,32)}...</span></td>
                  <td><div className="flex g4"><button className="btn btn-o btn-xs"><Ic d={I.eye} s={11}/>Ver</button><button className="btn btn-o btn-xs"><Ic d={I.download} s={11}/></button></div></td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// ── CLIENTES ──────────────────────────────────────────────────────────────────
const Clientes = ({clientes, setClientes, periodos, addToast}) => {
  const now=new Date();
  const mk=`${now.getFullYear()}-${String(now.getMonth()+1).padStart(2,"0")}`;
  const v=pct(periodos[mk]);
  const [modal,setModal]=useState(false);
  const [envio,setEnvio]=useState(null);
  const [sending,setSending]=useState(false);
  const [form,setForm]=useState({nombre:"",email:"",dia:20,color:"#0967D2"});

  const agregar=()=>{
    if(!form.nombre||!form.email)return;
    setClientes(p=>[...p,{id:Date.now(),...form,activo:true}]);
    setModal(false);addToast("success",`Cliente "${form.nombre}" agregado`);
    setForm({nombre:"",email:"",dia:20,color:"#0967D2"});
  };
  const simEnvio=()=>{
    setSending(true);
    setTimeout(()=>{setSending(false);setEnvio(null);addToast("success",`Expediente enviado a ${envio.email} ✓`);},2200);
    addToast("info",`Generando expediente PDF para ${envio.nombre}...`);
  };

  return (
    <div>
      <div className="flex jb aic mb16">
        <div className="t13 muted">{clientes.filter(c=>c.activo).length} clientes activos de {clientes.length} registrados</div>
        <button className="btn btn-p" onClick={()=>setModal(true)}><Ic d={I.plus} s={14}/>Nuevo Cliente</button>
      </div>

      {v<100&&(
        <div className="alert alert-amber mb16">
          <Ic d={I.alert} s={18}/>
          <div><div className="alert-title">Expediente Incompleto — {v}%</div><div className="alert-desc">Completa todos los documentos requeridos antes de enviar a clientes. Faltan {DOCS.filter(d=>d.req&&periodos[mk]?.docs[d.id]?.status!=="aprobado").length} documentos.</div></div>
        </div>
      )}

      <div className="card">
        <div className="card-hdr"><div className="card-title">Clientes Registrados</div><div className="cloud-pill" style={{margin:0,padding:"5px 12px",fontSize:11}}><div className="cloud-dot"/>Sincronizado</div></div>
        <table className="table">
          <thead><tr><th>EMPRESA</th><th>CORREO COMPLIANCE</th><th>DÍA LÍMITE</th><th>ESTADO</th><th>ACCIONES</th></tr></thead>
          <tbody>
            {clientes.map(c=>(
              <tr key={c.id}>
                <td>
                  <div className="flex aic" style={{gap:10}}>
                    <div style={{width:34,height:34,borderRadius:8,background:c.color+"22",border:`2px solid ${c.color}`,display:"flex",alignItems:"center",justifyContent:"center"}}>
                      <div style={{width:10,height:10,borderRadius:"50%",background:c.color}}/>
                    </div>
                    <div><div className="fw7">{c.nombre}</div>{!c.activo&&<div style={{fontSize:10,color:"var(--txt4)"}}>Inactivo</div>}</div>
                  </div>
                </td>
                <td className="mono t11 muted">{c.email}</td>
                <td><span className="badge bgr mono">Día {c.dia}</span></td>
                <td>{c.activo?<span className="badge bg">Activo</span>:<span className="badge bgr">Inactivo</span>}</td>
                <td>
                  <div className="flex g8">
                    <button className="btn btn-o btn-xs" onClick={()=>setClientes(p=>p.map(x=>x.id===c.id?{...x,activo:!x.activo}:x))}>{c.activo?"Desactivar":"Activar"}</button>
                    {c.activo&&<button className={`btn btn-xs ${v>=100?"btn-s":"btn-o"}`} onClick={()=>v>=100?setEnvio(c):addToast("error","Expediente incompleto")}><Ic d={I.send} s={11}/>Enviar</button>}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {modal&&(
        <div className="modal-ov" onClick={()=>setModal(false)}>
          <div className="modal" onClick={e=>e.stopPropagation()}>
            <div className="modal-hdr"><div className="modal-title">Nuevo Cliente</div><button className="btn btn-o btn-sm" onClick={()=>setModal(false)}><Ic d={I.x} s={13}/></button></div>
            <div className="modal-body">
              {[["EMPRESA / PLANTA","nombre","Ej: Carrier, Ternium","text"],["CORREO COMPLIANCE","email","compliance@empresa.com","email"],["DÍA LÍMITE (1–28)","dia","20","number"]].map(([l,k,ph,t])=>(
                <div className="form-group" key={k}>
                  <label className="form-lbl">{l}</label>
                  <input className="form-input" type={t} placeholder={ph} value={form[k]} onChange={e=>setForm({...form,[k]:t==="number"?parseInt(e.target.value):e.target.value})}/>
                </div>
              ))}
              <div className="form-group">
                <label className="form-lbl">COLOR IDENTIFICADOR</label>
                <div className="flex aic g12"><input type="color" value={form.color} onChange={e=>setForm({...form,color:e.target.value})} style={{width:42,height:36,borderRadius:6,border:"1.5px solid var(--border)",cursor:"pointer",padding:2}}/><span className="mono t11 muted">{form.color}</span></div>
              </div>
            </div>
            <div className="modal-foot"><button className="btn btn-o" onClick={()=>setModal(false)}>Cancelar</button><button className="btn btn-p" onClick={agregar} disabled={!form.nombre||!form.email}><Ic d={I.plus} s={13}/>Agregar</button></div>
          </div>
        </div>
      )}

      {envio&&(
        <div className="modal-ov" onClick={()=>!sending&&setEnvio(null)}>
          <div className="modal" onClick={e=>e.stopPropagation()}>
            <div className="modal-hdr"><div className="modal-title">Confirmar Envío de Expediente</div></div>
            <div className="modal-body">
              <div className="alert alert-green mb16"><Ic d={I.check} s={18}/><div><div className="alert-title">Expediente 100% Completo</div><div className="alert-desc">Todos los documentos requeridos están aprobados y almacenados en la nube</div></div></div>
              <div style={{background:"var(--surface2)",border:"1px solid var(--border)",borderRadius:10,padding:16}}>
                <div className="flex aic g12 mb12">
                  <div style={{width:42,height:42,borderRadius:10,background:envio.color+"22",border:`2px solid ${envio.color}`,display:"flex",alignItems:"center",justifyContent:"center"}}><Ic d={I.building} s={20} c={envio.color}/></div>
                  <div><div className="fw7" style={{fontSize:15}}>{envio.nombre}</div><div className="mono t11 muted">{envio.email}</div></div>
                </div>
                <div className="divider"/>
                <div className="form-lbl">ASUNTO DEL CORREO</div>
                <div style={{fontWeight:600,color:"var(--blue)",fontSize:13,fontFamily:"var(--mono)",marginBottom:12}}>Expediente REPSE — {MESES[now.getMonth()]} {now.getFullYear()} — MICSA S.A. de C.V.</div>
                <div className="form-lbl">ADJUNTO</div>
                <div style={{fontSize:13,color:"var(--txt2)"}}>PDF compilado con todos los {DOCS.filter(d=>d.req).length} documentos requeridos + link de descarga desde nube</div>
              </div>
            </div>
            <div className="modal-foot">
              <button className="btn btn-o" onClick={()=>!sending&&setEnvio(null)} disabled={sending}>Cancelar</button>
              <button className="btn btn-s" onClick={simEnvio} disabled={sending}>{sending?<><Ic d={I.refresh} s={13}/>Enviando...</>:<><Ic d={I.send} s={13}/>Enviar Expediente</>}</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// ── ALERTAS ───────────────────────────────────────────────────────────────────
const Alertas = ({periodos}) => {
  const now=new Date();
  const mk=`${now.getFullYear()}-${String(now.getMonth()+1).padStart(2,"0")}`;
  const per=periodos[mk];
  const criticos=DOCS.filter(d=>d.req&&per?.docs[d.id]?.status!=="aprobado");

  const venc=[
    {label:"Opinión IMSS",           dias:8,  tipo:"rojo"},
    {label:"Opinión SAT",            dias:14, tipo:"amarillo"},
    {label:"Póliza RC",              dias:30, tipo:"amarillo"},
    {label:"Constancia REPSE",       dias:52, tipo:"verde"},
    {label:"Constancia Sit. Fiscal", dias:90, tipo:"verde"},
  ];

  return (
    <div>
      {criticos.length===0
        ?<div className="alert alert-green mb16"><Ic d={I.check} s={20}/><div><div className="alert-title">Expediente Completo ✓</div><div className="alert-desc">Todos los documentos requeridos de {MESES[now.getMonth()]} {now.getFullYear()} están aprobados y en la nube.</div></div></div>
        :<div className="alert alert-red mb16"><Ic d={I.alert} s={20}/><div><div className="alert-title">{criticos.length} documento(s) requerido(s) pendiente(s)</div><div className="alert-desc">El expediente no puede enviarse hasta completarlos. Ve al módulo Documentos para cargarlos.</div></div></div>
      }

      {criticos.length>0&&(
        <div className="card mb22">
          <div className="card-hdr"><div className="card-title" style={{color:"var(--red)"}}>Documentos Críticos Faltantes</div><span className="badge br">{criticos.length} pendientes</span></div>
          <table className="table">
            <thead><tr><th>DOCUMENTO</th><th>CATEGORÍA</th><th>OBLIGATORIO</th><th>ESTADO</th></tr></thead>
            <tbody>
              {criticos.map(d=>(
                <tr key={d.id}>
                  <td className="fw7">{d.label}</td>
                  <td><span style={{fontSize:11,fontWeight:600,color:CAT[d.cat].color,background:CAT[d.cat].bg,padding:"3px 8px",borderRadius:4}}>{CAT[d.cat].label.split(" ")[0]}</span></td>
                  <td><span className="badge br">Sí, requerido</span></td>
                  <td>{per?.docs[d.id]?.status==="revision"?<span className="badge ba"><Ic d={I.eye} s={10}/>En Revisión</span>:<span className="badge bgr"><Ic d={I.clock} s={10}/>Sin Cargar</span>}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <div className="card">
        <div className="card-hdr"><div><div className="card-title">Próximos Vencimientos</div><div className="card-sub">Documentos con vigencia próxima a expirar</div></div></div>
        <div className="card-body">
          {venc.map((v,i)=>{
            const col=v.tipo==="rojo"?"var(--red)":v.tipo==="amarillo"?"var(--amber)":"var(--green)";
            const bg=v.tipo==="rojo"?"var(--red-lt)":v.tipo==="amarillo"?"var(--amber-lt)":"var(--green-lt)";
            const bc=v.tipo==="rojo"?"br":v.tipo==="amarillo"?"ba":"bg";
            const lbl=v.tipo==="rojo"?"Urgente":v.tipo==="amarillo"?"Atención":"Vigente";
            return (
              <div key={i} style={{display:"flex",alignItems:"center",gap:14,padding:"13px 0",borderBottom:i<venc.length-1?"1px solid var(--border)":"none"}}>
                <div style={{width:40,height:40,borderRadius:10,background:bg,display:"flex",alignItems:"center",justifyContent:"center",color:col,flexShrink:0}}><Ic d={I.clock} s={18}/></div>
                <div style={{flex:1}}>
                  <div className="fw7" style={{fontSize:14}}>{v.label}</div>
                  <div style={{fontSize:12,color:"var(--txt3)"}}>Vence en {v.dias} días</div>
                </div>
                <div className="progress" style={{width:100}}><div className="pf" style={{width:`${Math.min(100,(v.dias/30)*100)}%`,background:col}}/></div>
                <span className="mono fw7" style={{color:col,fontSize:13,minWidth:55,textAlign:"right"}}>{v.dias} días</span>
                <span className={`badge ${bc}`}>{lbl}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

// ── ICSOE ─────────────────────────────────────────────────────────────────────
const PERIODOS_CUATRIM = [
  { id:"c1", label:"1er Cuatrimestre", meses:"Enero — Abril",    limite:"Mayo 17" },
  { id:"c2", label:"2do Cuatrimestre", meses:"Mayo — Agosto",    limite:"Sep 17"  },
  { id:"c3", label:"3er Cuatrimestre", meses:"Sep — Diciembre",  limite:"Ene 17"  },
];

const initICSO = () => {
  const p = {};
  [2024,2025,2026].forEach(y => PERIODOS_CUATRIM.forEach(c => {
    const k=`${y}-${c.id}`;
    const st=y<2026||(y===2026&&c.id==="c1")?["presentada","presentada","en_captura","pendiente"][Math.floor(Math.random()*4)]:"pendiente";
    p[k]={ status:st, folio:st==="presentada"?`ICSOE-${y}-${c.id}-${Math.floor(Math.random()*9000+1000)}`:"", contratos:st!=="pendiente"?[
      {id:1,empresa:"Ironcast S.A. de C.V.",rfc:"IRO8501154S6",trabajadores:6,monto:85000},
    ]:[], acuse:st==="presentada"?`acuse_${y}_${c.id}.pdf`:"" };
  }));
  return p;
};

const ICSOE = ({addToast}) => {
  const [registros,setRegistros]=useState(initICSO);
  const [sel,setSel]=useState(null);
  const [modal,setModal]=useState(false);
  const now=new Date();
  const curY=now.getFullYear();

  const stBadge=(s)=>{
    if(s==="presentada")return <span className="badge bg"><Ic d={I.check} s={10}/>Presentada</span>;
    if(s==="en_captura")return <span className="badge ba"><Ic d={I.eye} s={10}/>En Captura</span>;
    if(s==="firmada")return <span className="badge bb"><Ic d={I.star} s={10}/>Firmada</span>;
    return <span className="badge bgr"><Ic d={I.clock} s={10}/>Pendiente</span>;
  };

  const simPresentar=(k)=>{
    const folio=`ICSOE-${k}-${Date.now().toString().slice(-6)}`;
    setRegistros(p=>({...p,[k]:{...p[k],status:"presentada",folio,acuse:`acuse_${k}.pdf`}}));
    addToast("success",`Informativa presentada — Folio ${folio}`);
    setSel(null);
  };

  return (
    <div>
      <div className="alert alert-blue mb16">
        <Ic d={I.info} s={18}/>
        <div>
          <div className="alert-title">Obligación Cuatrimestral — Art. 15-A Ley del Seguro Social</div>
          <div className="alert-desc">MICSA debe reportar al IMSS los contratos de servicios especializados celebrados en cada cuatrimestre. El reporte se realiza en el portal ICSOE con e.Firma del representante legal. Plazo: día 17 del mes siguiente al cierre del cuatrimestre.</div>
        </div>
      </div>

      <div className="g3 mb22">
        {[
          {lbl:"Informativas Presentadas",val:Object.values(registros).filter(r=>r.status==="presentada").length,col:"green",ic:I.check},
          {lbl:"En Proceso de Captura",   val:Object.values(registros).filter(r=>r.status==="en_captura").length,col:"amber",ic:I.eye},
          {lbl:"Pendientes",              val:Object.values(registros).filter(r=>r.status==="pendiente").length,  col:"blue", ic:I.clock},
        ].map((s,i)=>(
          <div key={i} className={`stat-card ${s.col}`}>
            <div className={`stat-ic ${s.col}`}><Ic d={s.ic} s={18}/></div>
            <div className="stat-val">{s.val}</div>
            <div className="stat-lbl">{s.lbl}</div>
          </div>
        ))}
      </div>

      {[curY,curY-1].map(y=>(
        <div key={y} className="card mb16">
          <div className="card-hdr">
            <div><div className="card-title">Año {y}</div><div className="card-sub">Informativas cuatrimestrales ICSOE</div></div>
          </div>
          <table className="table">
            <thead><tr><th>PERÍODO</th><th>MESES</th><th>FECHA LÍMITE</th><th>ESTADO</th><th>FOLIO</th><th>CONTRATOS</th><th>ACCIÓN</th></tr></thead>
            <tbody>
              {PERIODOS_CUATRIM.map(c=>{
                const k=`${y}-${c.id}`;
                const r=registros[k];
                return (
                  <tr key={k}>
                    <td className="fw7">{c.label}</td>
                    <td className="mono t11 muted">{c.meses}</td>
                    <td><span className="badge bgr mono t11">Día 17 {c.limite}</span></td>
                    <td>{stBadge(r?.status)}</td>
                    <td className="mono t11" style={{color:"var(--blue)"}}>{r?.folio||"—"}</td>
                    <td className="mono t11">{r?.contratos?.length||0} contrato(s)</td>
                    <td>
                      <div className="flex g8">
                        <button className="btn btn-o btn-xs" onClick={()=>setSel({k,c,r,y})}><Ic d={I.eye} s={11}/>Detalle</button>
                        {r?.status==="presentada"&&<button className="btn btn-o btn-xs"><Ic d={I.download} s={11}/>Acuse</button>}
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      ))}

      <div className="card">
        <div className="card-hdr"><div className="card-title">Guías Oficiales IMSS — ICSOE</div></div>
        <div className="card-body">
          <div className="g2" style={{gap:10}}>
            {[
              ["Alta de Usuarios Capturistas","Registra usuarios para captura de contratos","Guía 9"],
              ["Captura de Informativa","Registra contratos del período cuatrimestral","Guía principal"],
              ["Firma y Presentación","Firma con e.Firma y presenta ante el IMSS","Guía 5"],
              ["Devolver Informativa","Corrige errores antes de firmar","Guía 4"],
              ["Complementaria de Corrección","Corrige informativas ya presentadas","Guía 7"],
              ["Acuse de Presentación","Descarga el acuse del período reportado","Portal ICSOE"],
            ].map(([t,d,g])=>(
              <div key={t} style={{background:"var(--surface2)",border:"1px solid var(--border)",borderRadius:8,padding:"12px 14px",display:"flex",gap:12,alignItems:"flex-start"}}>
                <div style={{width:36,height:36,borderRadius:8,background:"var(--blue-lt)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}><Ic d={I.file} s={16} c="var(--blue)"/></div>
                <div style={{flex:1}}>
                  <div style={{fontWeight:700,fontSize:13}}>{t}</div>
                  <div style={{fontSize:11,color:"var(--txt3)",marginTop:2}}>{d}</div>
                </div>
                <span className="mono t11 muted">{g}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {sel&&(
        <div className="modal-ov" onClick={()=>setSel(null)}>
          <div className="modal" onClick={e=>e.stopPropagation()}>
            <div className="modal-hdr">
              <div><div className="modal-title">{sel.c.label} {sel.y}</div><div style={{fontSize:12,color:"var(--txt3)",marginTop:3}}>{sel.c.meses} · Límite: {sel.c.limite}</div></div>
              <button className="btn btn-o btn-sm" onClick={()=>setSel(null)}><Ic d={I.x} s={13}/></button>
            </div>
            <div className="modal-body">
              {sel.r?.status==="presentada"&&(
                <div className="alert alert-green mb16"><Ic d={I.check} s={16}/><div><div className="alert-title">Informativa Presentada Correctamente</div><div className="alert-desc mono">Folio: {sel.r.folio}</div></div></div>
              )}
              <div className="g2" style={{gap:12,marginBottom:14}}>
                {[["Estado",stBadge(sel.r?.status)],["Folio",<span className="mono t11" style={{color:"var(--blue)"}}>{sel.r?.folio||"Sin folio"}</span>],["Contratos",`${sel.r?.contratos?.length||0} registrado(s)`],["Acuse",sel.r?.acuse||"No disponible"]].map(([l,v])=>(
                  <div key={l} style={{background:"var(--surface2)",border:"1px solid var(--border)",borderRadius:8,padding:"11px 13px"}}>
                    <div className="form-lbl">{l}</div>
                    <div style={{fontSize:13,fontWeight:500}}>{v}</div>
                  </div>
                ))}
              </div>
              {sel.r?.contratos?.length>0&&(
                <div style={{background:"var(--surface2)",border:"1px solid var(--border)",borderRadius:8,padding:"12px 14px"}}>
                  <div className="form-lbl" style={{marginBottom:8}}>CONTRATOS REPORTADOS</div>
                  {sel.r.contratos.map(c=>(
                    <div key={c.id} style={{display:"flex",gap:10,alignItems:"center",padding:"8px 0",borderBottom:"1px solid var(--border)"}}>
                      <Ic d={I.building} s={15} c="var(--txt3)"/>
                      <div style={{flex:1}}><div className="fw7 t13">{c.empresa}</div><div className="mono t11 muted">{c.rfc} · {c.trabajadores} trab.</div></div>
                      <div className="mono t12" style={{color:"var(--green)",fontWeight:700}}>${c.monto?.toLocaleString()}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className="modal-foot">
              <button className="btn btn-o" onClick={()=>setSel(null)}>Cerrar</button>
              {sel.r?.status!=="presentada"&&<button className="btn btn-p" onClick={()=>simPresentar(sel.k)}><Ic d={I.send} s={13}/>Simular Presentación</button>}
              {sel.r?.status==="presentada"&&<button className="btn btn-s"><Ic d={I.download} s={13}/>Descargar Acuse</button>}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// ── SISUB ─────────────────────────────────────────────────────────────────────
const CLIENTES_SISUB = [
  { id:"c1", nombre:"Ironcast S.A. de C.V.",   rfc:"IRO8501154S6", planta:"Planta Monclova",   color:"#0967D2" },
  { id:"c2", nombre:"Carrier de México",        rfc:"CAR920115P27", planta:"Planta Ramos Arizpe",color:"#5521B5" },
  { id:"c3", nombre:"Ternium México S.A.",       rfc:"TER951020JK5", planta:"Planta Guerrero",    color:"#0E8A5C" },
  { id:"c4", nombre:"AHMSA",                    rfc:"AHM570101AB2", planta:"Planta Acerías",     color:"#B45309" },
];

const initSISUB = () => ({
  subcontratistas: [
    { id:"s1", razon:"MICSA S.A. de C.V.", rfc:"MIC2301268S5", repse:"REPSE-2023-00847", vigencia:"2025-12-31", trabajadores:6, status:"activo" },
  ],
  reportes: CLIENTES_SISUB.map((c,i) => ({
    id: `r${i+1}`, clienteId: c.id,
    periodo: "2026-02",
    trabajadores: TRABAJADORES.map(t => ({ ...t, ingreso: `2026-01-${String(i*3+1).padStart(2,"0")}`, activo: true })),
    presentado: i < 2,
    fecha: i < 2 ? `2026-02-${10+i*3}` : null,
  })),
});

const SISUB = ({ addToast }) => {
  const [data, setData] = useState(initSISUB);
  const [tab, setTab] = useState("subcontratistas");
  const [selReporte, setSelReporte] = useState(null);
  const [modalAdd, setModalAdd] = useState(false);
  const now = new Date();
  const [mesRep, setMesRep] = useState(now.getMonth());
  const [yrRep, setYrRep] = useState(now.getFullYear());

  const simPresentar = (rid) => {
    setData(p => ({
      ...p,
      reportes: p.reportes.map(r => r.id === rid ? { ...r, presentado: true, fecha: new Date().toISOString().split("T")[0] } : r)
    }));
    addToast("success", "Reporte de trabajadores presentado al cliente ✓");
    setSelReporte(null);
  };

  const toggleTrab = (rid, wid) => {
    setData(p => ({
      ...p,
      reportes: p.reportes.map(r => r.id !== rid ? r : {
        ...r,
        trabajadores: r.trabajadores.map(t => t.id === wid ? { ...t, activo: !t.activo } : t)
      })
    }));
  };

  return (
    <div>
      <div className="alert alert-blue mb16">
        <Ic d={I.info} s={18}/>
        <div>
          <div className="alert-title">Sistema de Información de Subcontratación (SISUB)</div>
          <div className="alert-desc">MICSA como prestador de servicios especializados debe reportar mensualmente a cada cliente contratante los trabajadores que ingresan a sus instalaciones, conforme al Art. 13 de la Ley Federal del Trabajo reformada.</div>
        </div>
      </div>

      <div className="flex g8 mb16">
        {[["subcontratistas","Mis Datos REPSE",I.shield],["reportes","Reporte por Cliente",I.building]].map(([id,lbl,ic])=>(
          <button key={id} className={`ptab ${tab===id?"sel":""}`} onClick={()=>setTab(id)} style={{display:"flex",alignItems:"center",gap:7}}>
            <Ic d={ic} s={13}/>{lbl}
          </button>
        ))}
      </div>

      {tab === "subcontratistas" && (
        <div>
          <div className="g3 mb16">
            {[
              {lbl:"Subcontratistas Registrados", val:data.subcontratistas.length, col:"blue",  ic:I.building},
              {lbl:"Trabajadores Activos",         val:TRABAJADORES.length,          col:"green", ic:I.star},
              {lbl:"Constancias REPSE Vigentes",   val:data.subcontratistas.filter(s=>s.status==="activo").length, col:"amber",ic:I.shield},
            ].map((s,i)=>(
              <div key={i} className={`stat-card ${s.col}`}>
                <div className={`stat-ic ${s.col}`}><Ic d={s.ic} s={18}/></div>
                <div className="stat-val">{s.val}</div>
                <div className="stat-lbl">{s.lbl}</div>
              </div>
            ))}
          </div>
          <div className="card mb16">
            <div className="card-hdr">
              <div><div className="card-title">Subcontratistas Registrados</div><div className="card-sub">Empresas prestadoras de servicios especializados con REPSE</div></div>
              <button className="btn btn-p btn-sm" onClick={()=>setModalAdd(true)}><Ic d={I.plus} s={13}/>Agregar</button>
            </div>
            <table className="table">
              <thead><tr><th>RAZÓN SOCIAL</th><th>RFC</th><th>CONSTANCIA REPSE</th><th>VIGENCIA</th><th>TRABAJADORES</th><th>ESTADO</th></tr></thead>
              <tbody>
                {data.subcontratistas.map(s=>(
                  <tr key={s.id}>
                    <td className="fw7">{s.razon}</td>
                    <td className="mono t11">{s.rfc}</td>
                    <td className="mono t11" style={{color:"var(--blue)"}}>{s.repse}</td>
                    <td className="mono t11">{s.vigencia}</td>
                    <td><span className="badge bb mono">{s.trabajadores}</span></td>
                    <td><span className={`badge ${s.status==="activo"?"bg":"br"}`}>{s.status==="activo"?"Activo":"Inactivo"}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="card">
            <div className="card-hdr"><div className="card-title">Trabajadores Registrados en MICSA</div><div className="card-sub">Personal que puede ser reportado a clientes</div></div>
            <table className="table">
              <thead><tr><th>NOMBRE</th><th>PUESTO</th><th>SALARIO MENSUAL</th><th>NSS / IMSS</th><th>ESTADO</th></tr></thead>
              <tbody>
                {TRABAJADORES.map(t=>(
                  <tr key={t.id}>
                    <td>
                      <div className="flex aic g8">
                        <div style={{width:32,height:32,borderRadius:"50%",background:"var(--blue-lt)",border:"2px solid var(--blue-md)",display:"flex",alignItems:"center",justifyContent:"center",fontWeight:800,fontSize:12,color:"var(--blue)",flexShrink:0}}>{t.nombre.charAt(0)}</div>
                        <span className="fw7">{t.nombre}</span>
                      </div>
                    </td>
                    <td className="muted t12">{t.puesto}</td>
                    <td className="mono fw7" style={{color:"var(--green)"}}>${t.salario.toLocaleString()}</td>
                    <td className="mono t11 muted">NSS-{Math.floor(Math.random()*9e9+1e9)}</td>
                    <td><span className="badge bg">Activo</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {tab === "reportes" && (
        <div>
          <div className="alert alert-amber mb16">
            <Ic d={I.alert} s={16}/>
            <div><div className="alert-title">Reporte mensual de trabajadores por cliente</div>
            <div className="alert-desc">Debes informar a cada cliente los trabajadores que ingresan a sus instalaciones. Incluye nombre, NSS, puesto y período de servicio.</div></div>
          </div>
          <div className="flex aic g12 mb16">
            <span className="form-lbl" style={{margin:0}}>PERÍODO:</span>
            <div className="flex g6">{[2025,2026].map(y=><button key={y} className={`ptab ${yrRep===y?"sel":""}`} onClick={()=>setYrRep(y)}>{y}</button>)}</div>
            <div className="flex g6">{MESES.map((m,i)=><button key={i} className={`ptab ${mesRep===i?"sel":""}`} onClick={()=>setMesRep(i)} style={{fontSize:11}}>{m.slice(0,3)}</button>)}</div>
          </div>
          <div className="g2" style={{gap:14}}>
            {CLIENTES_SISUB.map(c=>{
              const rep = data.reportes.find(r=>r.clienteId===c.id);
              const activos = rep?.trabajadores.filter(t=>t.activo).length||0;
              return (
                <div key={c.id} className="card" style={{borderTop:`3px solid ${c.color}`}}>
                  <div className="card-hdr">
                    <div className="flex aic g10">
                      <div style={{width:36,height:36,borderRadius:8,background:c.color+"22",border:`2px solid ${c.color}`,display:"flex",alignItems:"center",justifyContent:"center"}}><Ic d={I.building} s={17} c={c.color}/></div>
                      <div><div className="card-title">{c.nombre}</div><div className="card-sub mono">{c.rfc}</div></div>
                    </div>
                    {rep?.presentado
                      ?<span className="badge bg"><Ic d={I.check} s={10}/>Reportado {rep.fecha}</span>
                      :<span className="badge ba">Pendiente</span>}
                  </div>
                  <div className="card-body" style={{paddingTop:12,paddingBottom:12}}>
                    <div className="flex jb aic mb12">
                      <span className="t12 muted">{c.planta} · <span className="mono fw7" style={{color:c.color}}>{activos} trabajadores</span></span>
                      <button className="btn btn-o btn-xs" onClick={()=>setSelReporte({c,rep})}><Ic d={I.eye} s={11}/>Ver / Editar</button>
                    </div>
                    <div style={{display:"flex",gap:6,flexWrap:"wrap"}}>
                      {rep?.trabajadores.filter(t=>t.activo).map(t=>(
                        <span key={t.id} style={{fontSize:10,fontWeight:600,padding:"3px 9px",borderRadius:20,background:c.color+"15",color:c.color,border:`1px solid ${c.color}44`}}>{t.nombre.split(" ")[0]}</span>
                      ))}
                    </div>
                  </div>
                  <div style={{padding:"10px 20px",borderTop:"1px solid var(--border)",display:"flex",justifyContent:"flex-end"}}>
                    <button className={`btn btn-sm ${rep?.presentado?"btn-o":"btn-p"}`} onClick={()=>rep&&simPresentar(rep.id)} disabled={rep?.presentado}>
                      {rep?.presentado?<><Ic d={I.check} s={12}/>Enviado</>:<><Ic d={I.send} s={12}/>Presentar Reporte</>}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {selReporte&&(
        <div className="modal-ov" onClick={()=>setSelReporte(null)}>
          <div className="modal" style={{width:580}} onClick={e=>e.stopPropagation()}>
            <div className="modal-hdr">
              <div><div className="modal-title">Reporte — {selReporte.c.nombre}</div><div style={{fontSize:12,color:"var(--txt3)",marginTop:3}}>{MESES[mesRep]} {yrRep} · {selReporte.c.planta}</div></div>
              <button className="btn btn-o btn-sm" onClick={()=>setSelReporte(null)}><Ic d={I.x} s={13}/></button>
            </div>
            <div className="modal-body">
              <div className="alert alert-blue mb16" style={{margin:"0 0 14px"}}>
                <Ic d={I.info} s={14}/>
                <div style={{fontSize:12}}>Selecciona los trabajadores que ingresaron a <strong>{selReporte.c.planta}</strong> este período</div>
              </div>
              {selReporte.rep?.trabajadores.map(t=>(
                <div key={t.id} style={{display:"flex",alignItems:"center",gap:12,padding:"10px 0",borderBottom:"1px solid var(--border)"}}>
                  <input type="checkbox" checked={t.activo} onChange={()=>toggleTrab(selReporte.rep.id,t.id)} style={{width:16,height:16,accentColor:selReporte.c.color,cursor:"pointer"}}/>
                  <div style={{width:34,height:34,borderRadius:"50%",background:"var(--surface2)",border:"2px solid var(--border)",display:"flex",alignItems:"center",justifyContent:"center",fontWeight:800,fontSize:12,color:"var(--txt3)",flexShrink:0}}>{t.nombre.charAt(0)}</div>
                  <div style={{flex:1}}>
                    <div className="fw7 t13">{t.nombre}</div>
                    <div className="t11 muted">{t.puesto} · <span className="mono">${t.salario.toLocaleString()}/mes</span></div>
                  </div>
                  <span className={`badge ${t.activo?"bg":"bgr"}`}>{t.activo?"Incluido":"Excluido"}</span>
                </div>
              ))}
            </div>
            <div className="modal-foot">
              <button className="btn btn-o" onClick={()=>setSelReporte(null)}>Cerrar</button>
              {!selReporte.rep?.presentado&&<button className="btn btn-s" onClick={()=>simPresentar(selReporte.rep.id)}><Ic d={I.send} s={13}/>Presentar Reporte</button>}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// ── FONACOT ───────────────────────────────────────────────────────────────────
const initFONACOT = () => ({
  creditos: [
    { id:"f1", wid:"w1", trabajador:"Sergio Santibáñez",  numCredito:"FON-2024-0381-4", monto:18000, saldo:12400, descuento:800,  inicio:"2024-03-01", fin:"2026-03-01", status:"activo" },
    { id:"f2", wid:"w3", trabajador:"Juan Sariñana",       numCredito:"FON-2024-1122-7", monto:25000, saldo:19500, descuento:1100, inicio:"2024-06-15", fin:"2026-12-15", status:"activo" },
    { id:"f3", wid:"w5", trabajador:"Hugo de Alba",        numCredito:"FON-2023-9045-2", monto:15000, saldo:3200,  descuento:600,  inicio:"2023-09-01", fin:"2025-09-01", status:"liquidado" },
  ],
  pagos: Array.from({length:6},(_,i)=>{
    const d=new Date(2026,1-i,1);
    return {
      id:`p${i+1}`,
      periodo:`${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,"0")}`,
      total:1900, detalle:[
        {wid:"w1",nombre:"Sergio Santibáñez",monto:800},
        {wid:"w3",nombre:"Juan Sariñana",monto:1100},
      ],
      pagado:i>0, fecha:i>0?`${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,"0")}-17`:null,
    };
  }),
});

const FONACOT = ({ addToast }) => {
  const [data,setData]=useState(initFONACOT);
  const [tab,setTab]=useState("creditos");
  const [sel,setSel]=useState(null);
  const now=new Date();

  const simPagar=(pid)=>{
    setData(p=>({...p,pagos:p.pagos.map(pg=>pg.id!==pid?pg:{...pg,pagado:true,fecha:new Date().toISOString().split("T")[0]})}));
    addToast("success","Descuento FONACOT registrado como pagado ✓");
    setSel(null);
  };

  const activos = data.creditos.filter(c=>c.status==="activo");
  const totalDesc = activos.reduce((a,c)=>a+c.descuento,0);
  const totalSaldo = activos.reduce((a,c)=>a+c.saldo,0);
  const pagoActual = data.pagos[0];

  return (
    <div>
      <div className="g3 mb16">
        {[
          {lbl:"Créditos Activos",     val:activos.length,                 col:"blue",  ic:I.star,  sub:`de ${data.creditos.length} totales`},
          {lbl:"Descuento Mensual",    val:`$${totalDesc.toLocaleString()}`,col:"amber", ic:I.chart, sub:"retención nómina"},
          {lbl:"Saldo Total Vigente",  val:`$${totalSaldo.toLocaleString()}`,col:"purple",ic:I.package,sub:"deuda activa trabajadores"},
        ].map((s,i)=>(
          <div key={i} className={`stat-card ${s.col}`}>
            <div className={`stat-ic ${s.col}`}><Ic d={s.ic} s={18}/></div>
            <div className="stat-val">{s.val}</div>
            <div className="stat-lbl">{s.lbl}</div>
            <div className="stat-sub">{s.sub}</div>
          </div>
        ))}
      </div>

      {!pagoActual?.pagado&&(
        <div className="alert alert-red mb16">
          <Ic d={I.alert} s={18}/>
          <div><div className="alert-title">Descuento FONACOT Pendiente — {MESES[now.getMonth()]} {now.getFullYear()}</div>
          <div className="alert-desc">Total a retener y entregar a FONACOT: <strong>${totalDesc.toLocaleString()}</strong> — Debe reflejarse en los CFDIs de nómina del período actual.</div></div>
        </div>
      )}

      <div className="flex g8 mb16">
        {[["creditos","Créditos",I.star],["pagos","Historial Pagos",I.chart],["cfdi","En Nómina CFDI",I.file]].map(([id,lbl,ic])=>(
          <button key={id} className={`ptab ${tab===id?"sel":""}`} onClick={()=>setTab(id)} style={{display:"flex",alignItems:"center",gap:7}}>
            <Ic d={ic} s={13}/>{lbl}
          </button>
        ))}
      </div>

      {tab==="creditos"&&(
        <div className="card">
          <div className="card-hdr"><div className="card-title">Créditos FONACOT de Trabajadores</div><button className="btn btn-p btn-sm"><Ic d={I.plus} s={13}/>Agregar Crédito</button></div>
          <table className="table">
            <thead><tr><th>TRABAJADOR</th><th>NO. CRÉDITO</th><th>MONTO ORIGINAL</th><th>SALDO PENDIENTE</th><th>DESC. MENSUAL</th><th>VIGENCIA</th><th>ESTADO</th></tr></thead>
            <tbody>
              {data.creditos.map(c=>(
                <tr key={c.id} style={{cursor:"pointer"}} onClick={()=>setSel(c)}>
                  <td>
                    <div className="flex aic g8">
                      <div style={{width:30,height:30,borderRadius:"50%",background:"var(--blue-lt)",display:"flex",alignItems:"center",justifyContent:"center",fontWeight:800,fontSize:11,color:"var(--blue)",flexShrink:0}}>{c.trabajador.charAt(0)}</div>
                      <span className="fw7">{c.trabajador}</span>
                    </div>
                  </td>
                  <td className="mono t11" style={{color:"var(--blue)"}}>{c.numCredito}</td>
                  <td className="mono">${c.monto.toLocaleString()}</td>
                  <td className="mono fw7" style={{color:c.status==="liquidado"?"var(--green)":"var(--amber)"}}>${c.saldo.toLocaleString()}</td>
                  <td className="mono fw7" style={{color:"var(--red)"}}>{c.status==="activo"?`-$${c.descuento.toLocaleString()}`:"—"}</td>
                  <td className="mono t11 muted">{c.inicio} → {c.fin}</td>
                  <td><span className={`badge ${c.status==="activo"?"ba":c.status==="liquidado"?"bg":"br"}`}>{c.status==="activo"?"Activo":c.status==="liquidado"?"Liquidado":"Inactivo"}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {tab==="pagos"&&(
        <div className="card">
          <div className="card-hdr"><div className="card-title">Historial de Retenciones FONACOT</div><div className="card-sub">Pagos mensuales entregados a FONACOT</div></div>
          <table className="table">
            <thead><tr><th>PERÍODO</th><th>TOTAL RETENIDO</th><th>TRABAJADORES</th><th>FECHA PAGO</th><th>ESTADO</th><th>ACCIÓN</th></tr></thead>
            <tbody>
              {data.pagos.map(p=>(
                <tr key={p.id}>
                  <td className="mono fw7">{p.periodo}</td>
                  <td className="mono fw7" style={{color:"var(--blue)"}}>${p.total.toLocaleString()}</td>
                  <td>{p.detalle.map(d=><span key={d.wid} className="mono t11 muted" style={{display:"block"}}>{d.nombre}: -${d.monto.toLocaleString()}</span>)}</td>
                  <td className="mono t11">{p.fecha||"—"}</td>
                  <td><span className={`badge ${p.pagado?"bg":"br"}`}>{p.pagado?"✓ Pagado":"Pendiente"}</span></td>
                  <td>{!p.pagado&&<button className="btn btn-s btn-xs" onClick={()=>simPagar(p.id)}><Ic d={I.check} s={11}/>Marcar Pagado</button>}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {tab==="cfdi"&&(
        <div>
          <div className="alert alert-amber mb16">
            <Ic d={I.alert} s={16}/>
            <div><div className="alert-title">Obligación en CFDI Nómina</div>
            <div className="alert-desc">El descuento FONACOT debe aparecer como deducción en el XML del CFDI de nómina de cada trabajador con crédito activo. Verifica que Zentric tenga configurado el concepto de deducción FONACOT.</div></div>
          </div>
          <div className="card">
            <div className="card-hdr"><div className="card-title">Desglose por Trabajador — Mes Actual</div></div>
            <table className="table">
              <thead><tr><th>TRABAJADOR</th><th>SALARIO BASE</th><th>DESC. FONACOT</th><th>NETO APROXIMADO</th><th>EN CFDI</th></tr></thead>
              <tbody>
                {TRABAJADORES.map(t=>{
                  const cred=data.creditos.find(c=>c.wid===t.id&&c.status==="activo");
                  return (
                    <tr key={t.id}>
                      <td className="fw7">{t.nombre}</td>
                      <td className="mono">${t.salario.toLocaleString()}</td>
                      <td className="mono fw7" style={{color:cred?"var(--red)":"var(--txt4)"}}>{cred?`-$${cred.descuento.toLocaleString()}`:"Sin crédito"}</td>
                      <td className="mono fw7" style={{color:"var(--green)"}}>${(t.salario-(cred?.descuento||0)).toLocaleString()}</td>
                      <td>{cred?<span className="badge ba"><Ic d={I.alert} s={10}/>Verificar XML</span>:<span className="badge bg">N/A</span>}</td>
                    </tr>
                  );
                })}
                <tr style={{background:"var(--surface2)"}}>
                  <td className="fw7" style={{color:"var(--txt2)"}}>TOTAL NÓMINA</td>
                  <td className="mono fw7">${TRABAJADORES.reduce((a,t)=>a+t.salario,0).toLocaleString()}</td>
                  <td className="mono fw7" style={{color:"var(--red)"}}>-${totalDesc.toLocaleString()}</td>
                  <td className="mono fw7" style={{color:"var(--green)"}}>${(TRABAJADORES.reduce((a,t)=>a+t.salario,0)-totalDesc).toLocaleString()}</td>
                  <td/>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}

      {sel&&(
        <div className="modal-ov" onClick={()=>setSel(null)}>
          <div className="modal" onClick={e=>e.stopPropagation()}>
            <div className="modal-hdr">
              <div><div className="modal-title">Crédito FONACOT</div><div style={{fontSize:12,color:"var(--txt3)",marginTop:3}}>{sel.trabajador}</div></div>
              <button className="btn btn-o btn-sm" onClick={()=>setSel(null)}><Ic d={I.x} s={13}/></button>
            </div>
            <div className="modal-body">
              <div className="g2" style={{gap:12}}>
                {[["No. Crédito",sel.numCredito],["Trabajador",sel.trabajador],["Monto Original",`$${sel.monto.toLocaleString()}`],["Saldo Pendiente",`$${sel.saldo.toLocaleString()}`],["Descuento Mensual",`$${sel.descuento.toLocaleString()}`],["Vigencia",`${sel.inicio} → ${sel.fin}`]].map(([l,v])=>(
                  <div key={l} style={{background:"var(--surface2)",border:"1px solid var(--border)",borderRadius:8,padding:"11px 13px"}}>
                    <div className="form-lbl">{l}</div>
                    <div style={{fontSize:13,fontWeight:600,fontFamily:l==="No. Crédito"?"var(--mono)":"var(--font)"}}>{v}</div>
                  </div>
                ))}
              </div>
              <div style={{marginTop:14,background:"var(--surface2)",border:"1px solid var(--border)",borderRadius:8,padding:"11px 13px"}}>
                <div className="form-lbl">AVANCE DE PAGO</div>
                <div className="flex aic g12 mt8">
                  <div className="progress f1 p-lg"><div className="pf" style={{width:`${Math.round((1-sel.saldo/sel.monto)*100)}%`,background:"var(--green)"}}/></div>
                  <span className="mono fw7" style={{color:"var(--green)"}}>{Math.round((1-sel.saldo/sel.monto)*100)}%</span>
                </div>
              </div>
            </div>
            <div className="modal-foot"><button className="btn btn-o" onClick={()=>setSel(null)}>Cerrar</button></div>
          </div>
        </div>
      )}
    </div>
  );
};

// ── CONTRATOS ─────────────────────────────────────────────────────────────────
const initCONTRATOS = () => ({
  servicio: [
    { id:"cs1", cliente:"Ironcast S.A. de C.V.", rfc:"IRO8501154S6", objeto:"Servicios de mantenimiento industrial especializado", inicio:"2025-01-01", fin:"2026-12-31", monto:480000, moneda:"MXN", status:"vigente", firmado:true, file:"contrato_ironcast_2025.pdf" },
    { id:"cs2", cliente:"Carrier de México",     rfc:"CAR920115P27", objeto:"Suministro de técnicos especializados en HVAC",       inicio:"2025-03-01", fin:"2026-03-01", monto:320000, moneda:"MXN", status:"vigente", firmado:true, file:"contrato_carrier_2025.pdf" },
    { id:"cs3", cliente:"Ternium México S.A.",    rfc:"TER951020JK5", objeto:"Operación y mantenimiento de equipos de planta",      inicio:"2025-06-01", fin:"2026-06-01", monto:260000, moneda:"MXN", status:"vigente", firmado:true, file:"contrato_ternium_2025.pdf" },
    { id:"cs4", cliente:"AHMSA",                 rfc:"AHM570101AB2", objeto:"Servicios especializados de soldadura industrial",     inicio:"2024-01-01", fin:"2025-01-01", monto:150000, moneda:"MXN", status:"vencido",  firmado:true, file:"contrato_ahmsa_2024.pdf" },
  ],
  laboral: TRABAJADORES.map((t,i)=>({
    id:`cl${i+1}`, wid:t.id, trabajador:t.nombre, puesto:t.puesto, salario:t.salario,
    tipo: i===2||i===4?"indefinido":"determinado",
    inicio: `2023-0${i+1}-01`,
    fin: i===2||i===4?null:`2026-0${i+1<12?i+1:12}-01`,
    status: "vigente", firmado:true,
    file:`contrato_${t.nombre.split(" ")[0].toLowerCase()}.pdf`,
    clausulas:["Jornada 8hrs diarias","Salario según tabulador","Prestaciones de ley","Confidencialidad de información"],
  })),
});


/* ── 34 WORKERS (nómina completa MICSA) ───────────────────────────────────── */
const WORKERS_34 = [
  { nss:"83068104765", nombre:"Alvarez Garcia Paloma Nayeli" },
  { nss:"32917398854", nombre:"Bustos Ramos Víctor Manuel" },
  { nss:"03149807996", nombre:"Contreras González Jordan Neftalí" },
  { nss:"12048780154", nombre:"Cruz Lugo Luis Fernando" },
  { nss:"19149711947", nombre:"De Alba Elizondo Hugo Edwin",        curp:"AAEH970918HCLLLG00", rfc:"AAEH970918DZ0", numEmp:"03", fechaInicio:"2024-09-29" },
  { nss:"32927426927", nombre:"De Alba Reyna Jorge Alberto" },
  { nss:"32907334729", nombre:"De Alba Romero Hugo Arnoldo" },
  { nss:"41038707794", nombre:"Estrada Segura Juan Jesús" },
  { nss:"42169612548", nombre:"Fabela Rivera César Ricardo" },
  { nss:"32068822249", nombre:"Flores González Rodolfo" },
  { nss:"11160675507", nombre:"Gaona Santiago Sotero" },
  { nss:"02168185920", nombre:"García González Manuel Esteban" },
  { nss:"32079063783", nombre:"Garza Morales Mario Alberto" },
  { nss:"32917432497", nombre:"González Rivera Joel Roberto" },
  { nss:"41169702127", nombre:"Guzmán Alvarado Sergio" },
  { nss:"32988218130", nombre:"Juárez Gutiérrez Raúl",             curp:"JUGR820420HNERTL09", rfc:"JUGR820420EX2", numEmp:"05", fechaInicio:"2024-09-29" },
  { nss:"32058633259", nombre:"Lucido López Luis Silverio" },
  { nss:"32937535584", nombre:"Meraz Reyes Ricardo Rodolfo" },
  { nss:"18149859722", nombre:"Moreno de León Emmanuel Alejandro" },
  { nss:"32008307079", nombre:"Ortega Moreno Diego Gerardo" },
  { nss:"12139743673", nombre:"Pérez Martínez José Francisco" },
  { nss:"25159803631", nombre:"Rivas García José Armando" },
  { nss:"32139204211", nombre:"Rivas García Reynaldo" },
  { nss:"32109285018", nombre:"Rodríguez Guerrero Israel" },
  { nss:"42169831056", nombre:"Rodríguez Juárez Ángel Alejandro" },
  { nss:"60078906512", nombre:"Rodríguez Juárez Rolando" },
  { nss:"32109006026", nombre:"Romo de los Santos Arturo Guadalupe", curp:"ROSA901124HCLMNR00", rfc:"ROSA901124NA6", numEmp:"16", fechaInicio:"2025-05-12" },
  { nss:"32987400804", nombre:"Santibáñez Domínguez Sergio" },
  { nss:"32877032733", nombre:"Sariñana Rodríguez Juan Bernardino" },
  { nss:"60998112225", nombre:"Savala González Edgar Pascual" },
  { nss:"32079137686", nombre:"Sifuentes Fraire Roberto Ulises" },
  { nss:"32128603787", nombre:"Silva Meraz Franciss Magdiel" },
  { nss:"08149811351", nombre:"Valenciano Vélez Kevin Daniel" },
  { nss:"09897142999", nombre:"Vázquez Gaytán Eduardo" },
];

const PATRON_DATA = {
  razonSocial:   "Montajes e Izajes del Centro Industrial Contractor S.A. de C.V.",
  rfc:           "MIC2301268S5",
  regimen:       "Sociedad Anónima de Capital Variable",
  regimenFiscal: "601 - Régimen General de Ley Personas Morales",
  domicilio:     "Guerrero Sur No. 108, Col. Monclova Centro",
  ciudad:        "Monclova",
  estado:        "Coahuila de Zaragoza",
  cp:            "25700",
  regPatronal:   "A2735956108",
  repLegal:      "Jordan Neftalí Contreras González",
  cargo:         "Representante Legal",
  sbcDiario:     315.04,
  sdi:           330.57,
  tipoContrato:  "01 - Contrato de trabajo por tiempo indeterminado",
  tipoNomina:    "O - Ordinaria",
  riesgo:        "5 - Clase V",
  tipoRegimen:   "02 - Sueldos",
  entidad:       "COA - Coahuila",
};

const PUESTOS_GEN = ["Operador Industrial","Técnico Especialista","Soldador","Mecánico","Electricista","Supervisor de Campo","Ayudante General","Rigger / Aparejador","Operador de Grúa","Inspector de Calidad","Otro"];
const JORNADAS_GEN = ["48 horas semanales","44 horas semanales (Mixta)","40 horas semanales","Según turno asignado"];
const DEPTOS_GEN = ["Operaciones","Mantenimiento","Ingeniería","Supervisión","Administración","Proyectos Especiales"];
const MESES_GEN = ["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"];

const fmtPeso = v => v ? `$${Number(v).toLocaleString('es-MX',{minimumFractionDigits:2})}` : '—';
const hoyGenStr = () => { const d=new Date(); return `${String(d.getDate()).padStart(2,'0')} de ${MESES_GEN[d.getMonth()]} de ${d.getFullYear()}`; };

/* ── CONTRATO VISUAL COMPONENT ─────────────────────────────────────────────── */
const ContratoDoc = ({ e }) => {
  const P = PATRON_DATA;
  const pnd = v => v ? v : <span style={{color:'var(--red)',fontWeight:700}}>[PENDIENTE]</span>;
  const pndP = v => v ? fmtPeso(v) : <span style={{color:'var(--red)',fontWeight:700}}>[PENDIENTE]</span>;
  return (
    <div id="contrato-doc" style={{background:'#FDFCFA',border:'1px solid var(--border)',borderRadius:8,padding:'32px 36px',fontFamily:"'Georgia',serif",fontSize:12,lineHeight:1.9,color:'#111',maxHeight:520,overflowY:'auto'}}>
      <div style={{textAlign:'center',fontSize:14,fontWeight:700,letterSpacing:'.8px',textTransform:'uppercase',marginBottom:3}}>CONTRATO INDIVIDUAL DE TRABAJO</div>
      <div style={{textAlign:'center',fontSize:13,fontWeight:700,letterSpacing:'.8px',textTransform:'uppercase',marginBottom:4}}>POR TIEMPO INDETERMINADO</div>
      <div style={{textAlign:'center',fontSize:10,fontFamily:'monospace',color:'#666',marginBottom:10}}>{P.rfc} · Reg. Patronal: {P.regPatronal} · {P.ciudad}, {P.estado}</div>
      <hr style={{border:'none',borderTop:'2px solid #111',margin:'6px 0 14px'}}/>
      <p style={{textAlign:'justify',marginBottom:6}}>Contrato Individual de Trabajo por Tiempo Indeterminado que celebran, por una parte, <strong>{P.razonSocial}</strong>, representada por <strong>{P.repLegal}</strong>, {P.cargo}, a quien se denominará <strong>"EL PATRÓN"</strong>; y por la otra, <strong>{pnd(e.nombre)}</strong>, a quien se denominará <strong>"EL TRABAJADOR"</strong>:</p>
      <div style={{fontWeight:700,fontSize:13,textDecoration:'underline',margin:'14px 0 5px'}}>DECLARACIONES</div>
      <p style={{textAlign:'justify',marginBottom:5}}><strong>EL PATRÓN:</strong> RFC {P.rfc}, Reg. Patronal IMSS {P.regPatronal}, domicilio en {P.domicilio}, {P.ciudad}, {P.estado}, C.P. {P.cp}. Inscrita en {P.regimenFiscal}. Constancia REPSE vigente.</p>
      <p style={{textAlign:'justify',marginBottom:5}}><strong>EL TRABAJADOR:</strong> Nombre: <strong>{pnd(e.nombre)}</strong> | NSS: <strong>{pnd(e.nss)}</strong>{e.curp?<> | CURP: <strong>{e.curp}</strong></>:''}{e.rfc?<> | RFC: <strong>{e.rfc}</strong></>:''}. {e.domicilio?`Domicilio: ${e.domicilio}.`:''} Tiene capacidad legal y física para el puesto; información auténtica.</p>
      <div style={{fontWeight:700,fontSize:13,textDecoration:'underline',margin:'14px 0 5px'}}>CLÁUSULAS</div>
      {[
        ['PRIMERA. NATURALEZA',`Contrato por Tiempo Indeterminado (${P.tipoContrato}). Nómina tipo ${P.tipoNomina}. La relación laboral inicia en la fecha de firma.`],
        ['SEGUNDA. PERÍODO DE PRUEBA','Hasta 30 días naturales conforme al Art. 39-A LFT.'],
        ['TERCERA. PUESTO Y DEPARTAMENTO', e.puesto ? `El trabajador es contratado como ${e.puesto}, adscrito al departamento de ${e.departamento||'[PENDIENTE]'}. Riesgo: ${P.riesgo}. Régimen: ${P.tipoRegimen}.${e.funciones?' '+e.funciones:''}` : '[PENDIENTE]'],
        ['CUARTA. LUGAR DE TRABAJO', `${e.lugarTrabajo||P.ciudad+', '+P.estado}, Entidad: ${P.entidad}, o en instalaciones de clientes REPSE.`],
        ['QUINTA. JORNADA', e.jornada ? `${e.jornada}. Lugar expedición CFDI: 25700.` : '[PENDIENTE]'],
        ['SEXTA. SALARIO', `Salario Base de Cotización: ${fmtPeso(P.sbcDiario)}/día (mínimo IMSS zona norte 2025). SDI: ${fmtPeso(P.sdi)} (factor 1.049295). Equivalencia mensual: ${fmtPeso(P.sbcDiario*30)}. Periodicidad: Semanal vía Zentric. Sindicalizado: Sí.`],
        ['SÉPTIMA. PRESTACIONES','Vacaciones, prima vacacional 25%, aguinaldo 15 días, IMSS (Reg.Pat. '+P.regPatronal+'), INFONAVIT, FONACOT conforme a LFT.'],
        ['OCTAVA. HERRAMIENTAS','Bajo inventario firmado; correcta conservación y devolución.'],
        ['NOVENA. CONFIDENCIALIDAD','Vigente durante la relación y 5 años posteriores.'],
        ['DÉCIMA. PROPIEDAD INTELECTUAL',`Todo desarrollo con recursos de ${P.razonSocial} es propiedad exclusiva del patrón.`],
        ['DÉCIMA PRIMERA. NO COMPETENCIA','Prohibición en Coahuila por 1 año posterior a terminación sin autorización escrita.'],
        ['DÉCIMA SEGUNDA. RESCISIÓN','Art. 47 LFT y cualquier incumplimiento de este contrato.'],
        ['DÉCIMA TERCERA. JURISDICCIÓN','Tribunales Laborales de Coahuila de Zaragoza.'],
      ].map(([t,c],i)=>(
        <div key={i} style={{marginBottom:5}}>
          <span style={{fontWeight:700,textDecoration:'underline'}}>{t}. </span>
          <span style={{textAlign:'justify'}}>{c}</span>
        </div>
      ))}
      <div style={{textAlign:'center',margin:'22px 0 6px',fontSize:12,fontFamily:'sans-serif'}}>Firmado en {P.ciudad}, {P.estado}, a {hoyGenStr()}.</div>
      <div style={{display:'flex',gap:24,marginTop:36}}>
        <div style={{flex:1,textAlign:'center'}}>
          <img src={FIRMA_PATRON} alt="Firma" style={{height:60,objectFit:'contain',display:'block',margin:'0 auto 5px'}}/>
          <div style={{borderTop:'1.5px solid #444',paddingTop:5}}>
            <div style={{fontWeight:700,fontSize:11,fontFamily:'sans-serif'}}>{P.repLegal}</div>
            <div style={{fontSize:10,color:'#555',fontFamily:'sans-serif'}}>{P.cargo} · RFC: {P.rfc}</div>
          </div>
        </div>
        <div style={{flex:1,textAlign:'center'}}>
          <div style={{height:60,borderBottom:'1.5px solid #444',marginBottom:5}}/>
          <div style={{borderTop:'1.5px solid #444',paddingTop:5}}>
            <div style={{fontWeight:700,fontSize:11,fontFamily:'sans-serif'}}>{e.nombre||'EL TRABAJADOR'}</div>
            <div style={{fontSize:10,color:'#555',fontFamily:'sans-serif'}}>{e.puesto||'Puesto'} · NSS: {e.nss||'—'}{e.curp?' · CURP: '+e.curp:''}</div>
          </div>
        </div>
      </div>
      <div style={{display:'flex',gap:24,marginTop:32}}>
        {['Testigo 1','Testigo 2'].map(t=>(
          <div key={t} style={{flex:1,textAlign:'center'}}>
            <div style={{height:50,borderBottom:'1.5px solid #444',marginBottom:5}}/>
            <div style={{fontSize:11,fontFamily:'sans-serif',fontWeight:700}}>{t}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

/* ── GENERADOR INLINE para tab "generador" en CONTRATOS ───────────────────── */
const GeneradorContrato = ({ addToast }) => {
  const [busq, setBusq] = useState('');
  const [selIdx, setSelIdx] = useState(null);
  const [vistaPrevia, setVistaPrevia] = useState(false);
  const [batchDone, setBatchDone] = useState([]);
  const [batchRun, setBatchRun] = useState(false);
  const [subtab, setSubtab] = useState('form');
  const [e, setE] = useState({
    nombre:'', nss:'', curp:'', rfc:'', domicilio:'',
    departamento:'', puesto:'', funciones:'',
    lugarTrabajo:'', jornada:'',
    fechaInicio:'', numEmp:'',
  });
  const se = f => setE(p=>({...p,...f}));

  const filtrados = WORKERS_34.filter(w =>
    w.nombre.toLowerCase().includes(busq.toLowerCase()) || w.nss.includes(busq)
  );
  const selWorker = (w,idx) => {
    setSelIdx(idx);
    se({ nombre:w.nombre, nss:w.nss, curp:w.curp||'', rfc:w.rfc||'', numEmp:w.numEmp||'', fechaInicio:w.fechaInicio||'' });
  };

  const camposOk = e.puesto && e.jornada && e.departamento && e.nombre && e.nss;

  const runBatch = async () => {
    setBatchRun(true); setBatchDone([]);
    for(let i=0;i<WORKERS_34.length;i++){
      await new Promise(r=>setTimeout(r,55));
      setBatchDone(p=>[...p,WORKERS_34[i].nss]);
    }
    setBatchRun(false);
    addToast('success','34 contratos generados correctamente');
  };

  const descargar = () => {
    const txt = document.getElementById('contrato-doc')?.innerText||'';
    const b = new Blob([txt],{type:'text/plain;charset=utf-8'});
    const u = URL.createObjectURL(b);
    const a = document.createElement('a');
    a.href=u; a.download=`Contrato_${(e.nombre||'X').replace(/\s+/g,'_')}_MICSA.txt`; a.click();
    URL.revokeObjectURL(u);
    addToast('success','Contrato descargado');
  };

  const I2 = ({lck,xml,...p}) => (
    <input style={{width:'100%',padding:'7px 10px',background:lck?'#FFF8E0':xml?'var(--green-lt)':'var(--surface)',border:`1.5px solid ${lck?'#CCA030':xml?'var(--green-md)':'var(--border)'}`,borderRadius:6,fontSize:12,fontFamily:'var(--font)',color:lck?'#8C6500':xml?'var(--green)':'var(--txt)',outline:'none',fontWeight:lck||xml?600:'400',fontFamily:lck||xml?'var(--mono)':'var(--font)'}} disabled={lck} {...p}/>
  );
  const S2 = ({opts,...p}) => (
    <select style={{width:'100%',padding:'7px 10px',background:'var(--surface)',border:'1.5px solid var(--border)',borderRadius:6,fontSize:12,fontFamily:'var(--font)',color:'var(--txt)',outline:'none'}} {...p}>
      <option value="">— Seleccionar —</option>
      {opts.map(o=><option key={o} value={o}>{o}</option>)}
    </select>
  );
  const FL = ({lbl,req,children,note}) => (
    <div>
      <div style={{fontSize:9,fontWeight:700,color:'var(--txt2)',textTransform:'uppercase',letterSpacing:'.7px',marginBottom:3,fontFamily:'var(--mono)'}}>{lbl}{req&&<span style={{color:'var(--red)'}}> *</span>}</div>
      {children}
      {note&&<div style={{fontSize:9,color:'var(--txt4)',marginTop:2,fontFamily:'var(--mono)'}}>{note}</div>}
    </div>
  );

  return (
    <div style={{display:'grid',gridTemplateColumns:'220px 1fr',gap:14,alignItems:'start'}}>
      {/* PANEL TRABAJADORES */}
      <div style={{background:'var(--surface)',border:'1px solid var(--border)',borderRadius:10,overflow:'hidden',boxShadow:'var(--shadow-sm)'}}>
        <div style={{padding:'9px 12px',background:'var(--surface2)',borderBottom:'1px solid var(--border)',fontSize:10,fontWeight:700,color:'var(--txt2)',textTransform:'uppercase',letterSpacing:'.7px',fontFamily:'var(--mono)',display:'flex',justifyContent:'space-between',alignItems:'center'}}>
          <span>34 Trabajadores</span>
          <span style={{color:'var(--green)',fontSize:9}}>SBC ${PATRON_DATA.sbcDiario}</span>
        </div>
        <div style={{display:'flex',alignItems:'center',gap:6,padding:'7px 10px',borderBottom:'1px solid var(--border)'}}>
          <span style={{color:'var(--txt4)',fontSize:12}}>⌕</span>
          <input style={{flex:1,border:'none',outline:'none',fontSize:11,fontFamily:'var(--font)',color:'var(--txt)',background:'transparent'}}
            placeholder="Nombre o NSS..." value={busq} onChange={ev=>setBusq(ev.target.value)}/>
        </div>
        <div style={{maxHeight:360,overflowY:'auto'}}>
          {filtrados.map(w=>{
            const oi=WORKERS_34.indexOf(w);
            const isSel=selIdx===oi;
            const isDone=batchDone.includes(w.nss);
            return (
              <div key={w.nss} onClick={()=>selWorker(w,oi)}
                style={{display:'flex',alignItems:'center',gap:7,padding:'7px 10px',cursor:'pointer',borderBottom:'1px solid var(--border)',background:isSel?'var(--blue-lt)':'transparent',borderLeft:isSel?'3px solid var(--blue)':'3px solid transparent',transition:'background .1s'}}>
                <div style={{width:24,height:24,borderRadius:'50%',background:isSel?'var(--blue)':isDone?'var(--green)':'var(--surface2)',border:`1.5px solid ${isSel?'var(--blue)':isDone?'var(--green)':'var(--border)'}`,display:'flex',alignItems:'center',justifyContent:'center',fontWeight:700,fontSize:8,color:isSel||isDone?'#fff':'var(--txt2)',flexShrink:0}}>
                  {isDone?'✓':w.nombre.charAt(0)}
                </div>
                <div style={{flex:1,minWidth:0}}>
                  <div style={{fontSize:10,fontWeight:500,whiteSpace:'nowrap',overflow:'hidden',textOverflow:'ellipsis'}}>{w.nombre}</div>
                  <div style={{fontSize:9,color:'var(--txt4)',fontFamily:'var(--mono)'}}>{w.nss}{w.curp&&<span style={{marginLeft:4,fontSize:8,fontWeight:700,padding:'1px 4px',background:'var(--green-lt)',color:'var(--green)',border:'1px solid var(--green-md)',borderRadius:3}}>CFDI</span>}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* PANEL DERECHO */}
      <div>
        {/* SUBTABS */}
        <div style={{display:'flex',borderBottom:'2px solid var(--border)',marginBottom:12}}>
          {[['form','✏ Formulario'],['preview','📄 Contrato'],['batch','⚡ Batch 34']].map(([id,lbl])=>(
            <div key={id} onClick={()=>setSubtab(id)}
              style={{padding:'7px 14px',fontSize:10,fontWeight:700,textTransform:'uppercase',letterSpacing:'.5px',color:subtab===id?'var(--red)':'var(--txt3)',cursor:'pointer',borderBottom:subtab===id?'2px solid var(--red)':'2px solid transparent',marginBottom:-2,fontFamily:'var(--mono)',transition:'all .15s'}}>
              {lbl}
            </div>
          ))}
        </div>

        {subtab==='form'&&(
          <>
            {/* PATRÓN BLOQUEADO */}
            <div className="card mb16">
              <div className="card-hdr">
                <div><div className="card-title">EL PATRÓN — Datos Fiscales</div><div className="card-sub">CSF SAT 07/ENE/2026 · XML CFDI nóminas · RFC MIC2301268S5</div></div>
                <span className="badge" style={{background:'#FFF8E0',color:'#8C6500',border:'1px solid #CCA030',fontSize:10}}>🔒 Bloqueado</span>
              </div>
              <div className="card-body">
                <div style={{display:'grid',gridTemplateColumns:'2fr 1fr 1fr 1fr',gap:10,marginBottom:10}}>
                  <FL lbl="Razón Social"><I2 value={PATRON_DATA.razonSocial} lck readOnly/></FL>
                  <FL lbl="RFC"><I2 value={PATRON_DATA.rfc} lck readOnly/></FL>
                  <FL lbl="Reg. Patronal IMSS"><I2 value={PATRON_DATA.regPatronal} lck readOnly/></FL>
                  <FL lbl="C.P."><I2 value={PATRON_DATA.cp} lck readOnly/></FL>
                </div>
                <div style={{display:'grid',gridTemplateColumns:'1fr 1fr 1fr 1fr',gap:10}}>
                  <FL lbl="SBC Diario" note="Mínimo zona norte 2025"><I2 value={fmtPeso(PATRON_DATA.sbcDiario)} lck readOnly/></FL>
                  <FL lbl="SDI / día"><I2 value={fmtPeso(PATRON_DATA.sdi)} lck readOnly/></FL>
                  <FL lbl="Salario Mensual (x30)"><I2 value={fmtPeso(PATRON_DATA.sbcDiario*30)} lck readOnly/></FL>
                  <FL lbl="Periodicidad"><I2 value="Semanal · 02" lck readOnly/></FL>
                </div>
              </div>
            </div>

            {/* TRABAJADOR */}
            <div className="card">
              <div className="card-hdr">
                <div><div className="card-title">EL TRABAJADOR</div><div className="card-sub">Selecciona del panel o captura manualmente</div></div>
                {selIdx!==null
                  ? <span className="badge bg">✓ {WORKERS_34[selIdx]?.nombre.split(' ').slice(-2).join(' ')}</span>
                  : <span className="badge bb">34 registros disponibles</span>}
              </div>
              <div className="card-body">
                <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:10,marginBottom:10}}>
                  <FL lbl="Nombre Completo" req><I2 value={e.nombre} onChange={ev=>se({nombre:ev.target.value})} placeholder="Apellidos Nombre(s)..." xml={!!e.nombre&&selIdx!==null}/></FL>
                  <FL lbl="NSS" req><I2 value={e.nss} onChange={ev=>se({nss:ev.target.value})} placeholder="11 dígitos" xml={!!e.nss&&selIdx!==null}/></FL>
                </div>
                <div style={{display:'grid',gridTemplateColumns:'1fr 1fr 1fr 1fr',gap:10,marginBottom:10}}>
                  <FL lbl="CURP" note="Del CFDI"><I2 value={e.curp} onChange={ev=>se({curp:ev.target.value})} xml={!!e.curp}/></FL>
                  <FL lbl="RFC Trabajador"><I2 value={e.rfc} onChange={ev=>se({rfc:ev.target.value})} xml={!!e.rfc}/></FL>
                  <FL lbl="No. Empleado"><I2 value={e.numEmp} onChange={ev=>se({numEmp:ev.target.value})} xml={!!e.numEmp} placeholder="Ej: 16"/></FL>
                  <FL lbl="Fecha Inicio"><I2 type="date" value={e.fechaInicio} onChange={ev=>se({fechaInicio:ev.target.value})} xml={!!e.fechaInicio}/></FL>
                </div>
                <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:10,marginBottom:10}}>
                  <FL lbl="Domicilio Trabajador"><I2 value={e.domicilio} onChange={ev=>se({domicilio:ev.target.value})} placeholder="Calle, No., Col., Ciudad"/></FL>
                  <FL lbl="Lugar de Trabajo"><I2 value={e.lugarTrabajo} onChange={ev=>se({lugarTrabajo:ev.target.value})} placeholder="Ej: Planta Ironcast, Monclova"/></FL>
                </div>
                <div style={{height:1,background:'var(--border)',margin:'10px 0'}}/>
                <div style={{display:'grid',gridTemplateColumns:'1fr 1fr 1fr',gap:10,marginBottom:10}}>
                  <FL lbl="Departamento" req><S2 opts={DEPTOS_GEN} value={e.departamento} onChange={ev=>se({departamento:ev.target.value})}/></FL>
                  <FL lbl="Puesto / Cargo" req><S2 opts={PUESTOS_GEN} value={e.puesto} onChange={ev=>se({puesto:ev.target.value})}/></FL>
                  <FL lbl="Jornada Semanal" req><S2 opts={JORNADAS_GEN} value={e.jornada} onChange={ev=>se({jornada:ev.target.value})}/></FL>
                </div>
                <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:10}}>
                  <FL lbl="Riesgo de Puesto" note="Clase V — del PDF nómina"><I2 value="5 - Clase V" lck readOnly/></FL>
                  <FL lbl="Descripción de Funciones (opcional)"><I2 value={e.funciones} onChange={ev=>se({funciones:ev.target.value})} placeholder="Actividades principales..."/></FL>
                </div>
              </div>
              <div style={{display:'flex',alignItems:'center',gap:10,padding:'12px 16px',background:'var(--surface2)',borderTop:'1px solid var(--border)'}}>
                <div style={{flex:1,fontSize:11,color:'var(--txt3)',fontFamily:'var(--mono)',display:'flex',alignItems:'center',gap:6}}>
                  <div style={{width:7,height:7,borderRadius:'50%',background:camposOk?'var(--green)':'var(--amber)',flexShrink:0}}/>
                  {camposOk?'Listo para generar':`Faltan: ${[!e.nombre&&'Nombre',!e.nss&&'NSS',!e.departamento&&'Dpto',!e.puesto&&'Puesto',!e.jornada&&'Jornada'].filter(Boolean).join(', ')}`}
                </div>
                <button className="btn btn-p btn-sm" disabled={!camposOk} onClick={()=>setSubtab('preview')}>
                  ⚡ Ver Contrato
                </button>
              </div>
            </div>
          </>
        )}

        {subtab==='preview'&&(
          <div className="card">
            <div className="card-hdr">
              <div><div className="card-title">Contrato — {e.nombre||'Sin nombre'}</div><div className="card-sub">{hoyGenStr()} · SBC ${PATRON_DATA.sbcDiario}/día · SDI ${PATRON_DATA.sdi}</div></div>
            </div>
            <div style={{padding:14}}>
              <ContratoDoc e={e}/>
            </div>
            <div style={{display:'flex',gap:8,padding:'11px 14px',background:'var(--surface2)',borderTop:'1px solid var(--border)'}}>
              <button className="btn btn-o btn-sm" onClick={()=>setSubtab('form')}>← Editar</button>
              <button className="btn btn-o btn-sm" onClick={descargar}>⬇ Descargar .txt</button>
              <button className="btn btn-p btn-sm" onClick={()=>window.print()}>🖨 Imprimir</button>
            </div>
          </div>
        )}

        {subtab==='batch'&&(
          <div className="card">
            <div className="card-hdr">
              <div><div className="card-title">Generación Batch — 34 Contratos</div><div className="card-sub">SBC ${PATRON_DATA.sbcDiario}/día · SDI ${PATRON_DATA.sdi} · Mínimo IMSS zona norte 2025</div></div>
              <span className="badge" style={{background:batchDone.length===34?'var(--green-lt)':'var(--amber-lt)',color:batchDone.length===34?'var(--green)':'var(--amber)',border:`1px solid ${batchDone.length===34?'var(--green-md)':'var(--amber-md)'}`,fontFamily:'var(--mono)',fontSize:10}}>{batchDone.length}/{WORKERS_34.length}</span>
            </div>
            <div className="card-body">
              <div style={{height:6,background:'var(--border)',borderRadius:3,overflow:'hidden',marginBottom:8}}>
                <div style={{height:'100%',background:'var(--green)',borderRadius:3,width:`${batchDone.length/WORKERS_34.length*100}%`,transition:'width .3s'}}/>
              </div>
              <div style={{fontSize:11,color:'var(--txt3)',fontFamily:'var(--mono)',marginBottom:14}}>{batchDone.length} de {WORKERS_34.length} · SBC ${PATRON_DATA.sbcDiario}/día para todos · Periodicidad semanal</div>
              <button className="btn btn-p btn-sm mb16" disabled={batchRun} onClick={runBatch}>
                {batchRun?'⏳ Procesando...':'⚡ Generar 34 contratos'}
              </button>
              <div style={{display:'flex',flexDirection:'column',gap:6,maxHeight:320,overflowY:'auto'}}>
                {WORKERS_34.map(w=>(
                  <div key={w.nss} style={{display:'flex',alignItems:'center',gap:10,padding:'9px 13px',background:batchDone.includes(w.nss)?'var(--green-lt)':'var(--surface)',border:`1px solid ${batchDone.includes(w.nss)?'var(--green-md)':'var(--border)'}`,borderRadius:7}}>
                    <div style={{width:26,height:26,borderRadius:'50%',background:batchDone.includes(w.nss)?'var(--green)':'var(--surface2)',color:batchDone.includes(w.nss)?'#fff':'var(--txt2)',border:`1.5px solid ${batchDone.includes(w.nss)?'var(--green)':'var(--border)'}`,display:'flex',alignItems:'center',justifyContent:'center',fontWeight:700,fontSize:9,flexShrink:0}}>
                      {batchDone.includes(w.nss)?'✓':w.nombre.charAt(0)}
                    </div>
                    <div style={{flex:1}}>
                      <div style={{fontSize:12,fontWeight:500}}>{w.nombre}</div>
                      <div style={{fontSize:9,color:'var(--txt4)',fontFamily:'var(--mono)'}}>{w.nss}{w.curp&&<span style={{marginLeft:6,fontSize:8,padding:'1px 4px',background:'var(--green-lt)',color:'var(--green)',border:'1px solid var(--green-md)',borderRadius:3,fontWeight:700}}>CFDI</span>}</div>
                    </div>
                    {batchDone.includes(w.nss)&&<span className="badge bg" style={{fontSize:10}}>✓ Generado</span>}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const CONTRATOS = ({ addToast }) => {
  const [data] = useState(initCONTRATOS);
  const [tab, setTab] = useState("servicio");
  const [sel, setSel] = useState(null);
  const [modalNew, setModalNew] = useState(false);
  const now = new Date();

  const diasParaVencer=(fin)=>{
    if(!fin)return null;
    const d=Math.ceil((new Date(fin)-now)/(1000*60*60*24));
    return d;
  };

  const vigBadge=(c)=>{
    if(c.status==="vencido")return <span className="badge br">Vencido</span>;
    const d=diasParaVencer(c.fin);
    if(d===null)return <span className="badge bg">Indefinido</span>;
    if(d<0)return <span className="badge br">Vencido</span>;
    if(d<60)return <span className="badge ba">Vence en {d}d</span>;
    return <span className="badge bg">Vigente</span>;
  };

  const totalServicio=data.servicio.filter(c=>c.status==="vigente").reduce((a,c)=>a+c.monto,0);

  return (
    <div>
      <div className="g3 mb16">
        {[
          {lbl:"Contratos de Servicio", val:data.servicio.filter(c=>c.status==="vigente").length, col:"blue",  ic:I.building, sub:`$${totalServicio.toLocaleString()} MXN/año`},
          {lbl:"Contratos Laborales",   val:data.laboral.length,                                   col:"green", ic:I.star,     sub:`${data.laboral.filter(c=>c.tipo==="indefinido").length} indefinidos`},
          {lbl:"Vencen en 60 días",     val:data.servicio.filter(c=>{const d=diasParaVencer(c.fin);return d!==null&&d>=0&&d<60}).length+data.laboral.filter(c=>{const d=diasParaVencer(c.fin);return d!==null&&d>=0&&d<60}).length,col:"amber",ic:I.clock,sub:"requieren renovación"},
        ].map((s,i)=>(
          <div key={i} className={`stat-card ${s.col}`}>
            <div className={`stat-ic ${s.col}`}><Ic d={s.ic} s={18}/></div>
            <div className="stat-val">{s.val}</div>
            <div className="stat-lbl">{s.lbl}</div>
            <div className="stat-sub">{s.sub}</div>
          </div>
        ))}
      </div>

      <div className="flex g8 mb16">
        {[["servicio","Contratos de Servicio",I.building],["laboral","Contratos Laborales",I.star],["generador","⚡ Generador",I.plus]].map(([id,lbl,ic])=>(
          <button key={id} className={`ptab ${tab===id?"sel":""}`} onClick={()=>setTab(id)} style={{display:"flex",alignItems:"center",gap:7}}>
            <Ic d={ic} s={13}/>{lbl}
          </button>
        ))}
      </div>

      {tab==="servicio"&&(
        <div>
          {data.servicio.some(c=>{const d=diasParaVencer(c.fin);return d!==null&&d>=0&&d<90;})&&(
            <div className="alert alert-amber mb16">
              <Ic d={I.alert} s={16}/>
              <div><div className="alert-title">Contratos próximos a vencer</div>
              <div className="alert-desc">{data.servicio.filter(c=>{const d=diasParaVencer(c.fin);return d!==null&&d>=0&&d<90;}).map(c=>c.cliente).join(", ")} — Gestionar renovación con anticipación</div></div>
            </div>
          )}
          <div className="card mb16">
            <div className="card-hdr">
              <div><div className="card-title">Contratos de Prestación de Servicios</div><div className="card-sub">Contratos con clientes donde MICSA funge como prestador especializado REPSE</div></div>
              <button className="btn btn-p btn-sm" onClick={()=>setModalNew(true)}><Ic d={I.plus} s={13}/>Nuevo Contrato</button>
            </div>
            <table className="table">
              <thead><tr><th>CLIENTE</th><th>OBJETO</th><th>PERÍODO</th><th>MONTO</th><th>FIRMA</th><th>ESTADO</th><th></th></tr></thead>
              <tbody>
                {data.servicio.map(c=>{
                  const cc=CLIENTES_SISUB.find(x=>x.rfc===c.rfc);
                  return (
                    <tr key={c.id} style={{cursor:"pointer"}} onClick={()=>setSel({type:"servicio",c})}>
                      <td>
                        <div className="flex aic g8">
                          <div style={{width:8,height:8,borderRadius:"50%",background:cc?.color||"var(--txt3)",flexShrink:0}}/>
                          <span className="fw7">{c.cliente}</span>
                        </div>
                      </td>
                      <td className="muted t12" style={{maxWidth:200}}><span className="trunc" style={{display:"block",maxWidth:190}}>{c.objeto}</span></td>
                      <td className="mono t11 muted">{c.inicio}<br/>{c.fin||"Indefinido"}</td>
                      <td className="mono fw7" style={{color:"var(--green)"}}>${c.monto.toLocaleString()}</td>
                      <td>{c.firmado?<span className="badge bg"><Ic d={I.check} s={10}/>Firmado</span>:<span className="badge br">Sin firma</span>}</td>
                      <td>{vigBadge(c)}</td>
                      <td><button className="btn btn-o btn-xs"><Ic d={I.download} s={11}/>PDF</button></td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div style={{background:"var(--surface2)",border:"1px solid var(--border)",borderRadius:10,padding:"14px 18px",display:"flex",gap:16,alignItems:"center"}}>
            <Ic d={I.info} s={16} c="var(--blue)"/>
            <div style={{fontSize:12,color:"var(--txt2)"}}>Los contratos de servicio deben adjuntarse al expediente REPSE mensual y al reporte cuatrimestral ICSOE como evidencia de la relación contractual con cada cliente contratante.</div>
          </div>
        </div>
      )}

      {tab==="laboral"&&(
        <div>
          <div className="card">
            <div className="card-hdr">
              <div><div className="card-title">Contratos Laborales Individuales</div><div className="card-sub">Contratos de trabajo de los 6 trabajadores registrados en MICSA</div></div>
              <button className="btn btn-p btn-sm"><Ic d={I.plus} s={13}/>Nuevo Contrato</button>
            </div>
            <div style={{padding:"0 0 4px"}}>
              {data.laboral.map(c=>{
                const dias=diasParaVencer(c.fin);
                return (
                  <div key={c.id} style={{display:"flex",alignItems:"center",gap:14,padding:"14px 20px",borderBottom:"1px solid var(--border)",cursor:"pointer",transition:"background .1s"}}
                    onClick={()=>setSel({type:"laboral",c})}
                    onMouseEnter={e=>e.currentTarget.style.background="var(--surface2)"}
                    onMouseLeave={e=>e.currentTarget.style.background="transparent"}>
                    <div style={{width:42,height:42,borderRadius:"50%",background:"var(--green-lt)",border:"2px solid var(--green-md)",display:"flex",alignItems:"center",justifyContent:"center",fontWeight:800,fontSize:15,color:"var(--green)",flexShrink:0}}>{c.trabajador.charAt(0)}</div>
                    <div style={{flex:1}}>
                      <div className="fw7">{c.trabajador}</div>
                      <div className="t12 muted">{c.puesto} · <span className="mono">${c.salario.toLocaleString()}/mes</span> · Contrato {c.tipo}</div>
                    </div>
                    <div style={{textAlign:"right"}}>
                      <div className="mono t11 muted">{c.inicio} →</div>
                      <div className="mono t11 muted">{c.fin||"Indefinido"}</div>
                    </div>
                    {vigBadge(c)}
                    <div className="flex g6">
                      <button className="btn btn-o btn-xs" onClick={e=>{e.stopPropagation();addToast("info",`Descargando ${c.file}`)}}><Ic d={I.download} s={11}/>PDF</button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {sel&&(
        <div className="modal-ov" onClick={()=>setSel(null)}>
          <div className="modal" style={{width:580}} onClick={e=>e.stopPropagation()}>
            <div className="modal-hdr">
              <div>
                <div className="modal-title">{sel.type==="servicio"?sel.c.cliente:sel.c.trabajador}</div>
                <div style={{fontSize:12,color:"var(--txt3)",marginTop:3}}>{sel.type==="servicio"?"Contrato de Prestación de Servicios":"Contrato Laboral Individual"}</div>
              </div>
              <button className="btn btn-o btn-sm" onClick={()=>setSel(null)}><Ic d={I.x} s={13}/></button>
            </div>
            <div className="modal-body">
              {sel.type==="servicio"&&(
                <>
                  <div className="g2" style={{gap:12,marginBottom:14}}>
                    {[["Cliente",sel.c.cliente],["RFC",sel.c.rfc],["Monto",`$${sel.c.monto.toLocaleString()} ${sel.c.moneda}`],["Inicio",sel.c.inicio],["Vencimiento",sel.c.fin||"Indefinido"],["Estado",vigBadge(sel.c)]].map(([l,v])=>(
                      <div key={l} style={{background:"var(--surface2)",border:"1px solid var(--border)",borderRadius:8,padding:"11px 13px"}}>
                        <div className="form-lbl">{l}</div>
                        <div style={{fontSize:13,fontWeight:500}}>{v}</div>
                      </div>
                    ))}
                  </div>
                  <div style={{background:"var(--surface2)",border:"1px solid var(--border)",borderRadius:8,padding:"12px 14px",marginBottom:12}}>
                    <div className="form-lbl">OBJETO DEL CONTRATO</div>
                    <div style={{fontSize:13,marginTop:4}}>{sel.c.objeto}</div>
                  </div>
                </>
              )}
              {sel.type==="laboral"&&(
                <>
                  <div className="g2" style={{gap:12,marginBottom:14}}>
                    {[["Trabajador",sel.c.trabajador],["Puesto",sel.c.puesto],["Salario",`$${sel.c.salario.toLocaleString()}/mes`],["Tipo",sel.c.tipo==="indefinido"?"Tiempo Indefinido":"Tiempo Determinado"],["Inicio",sel.c.inicio],["Vencimiento",sel.c.fin||"Indefinido"]].map(([l,v])=>(
                      <div key={l} style={{background:"var(--surface2)",border:"1px solid var(--border)",borderRadius:8,padding:"11px 13px"}}>
                        <div className="form-lbl">{l}</div>
                        <div style={{fontSize:13,fontWeight:500}}>{v}</div>
                      </div>
                    ))}
                  </div>
                  <div style={{background:"var(--surface2)",border:"1px solid var(--border)",borderRadius:8,padding:"12px 14px"}}>
                    <div className="form-lbl" style={{marginBottom:8}}>CLÁUSULAS PRINCIPALES</div>
                    {sel.c.clausulas.map((cl,i)=>(
                      <div key={i} style={{display:"flex",gap:8,alignItems:"flex-start",padding:"5px 0",borderBottom:i<sel.c.clausulas.length-1?"1px solid var(--border)":"none"}}>
                        <span style={{color:"var(--green)",fontWeight:700,flexShrink:0}}>✓</span>
                        <span style={{fontSize:12}}>{cl}</span>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>
            <div className="modal-foot">
              <button className="btn btn-o" onClick={()=>setSel(null)}>Cerrar</button>
              <button className="btn btn-p" onClick={()=>{addToast("info",`Descargando ${sel.c.file}`);setSel(null);}}><Ic d={I.download} s={13}/>Descargar PDF</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// ── APP ───────────────────────────────────────────────────────────────────────
let _tId=0;

export default function App() {
  const [view,setView]=useState("dashboard");
  const [periodos,setPeriodos]=useState(initPer);
  const [clientes,setClientes]=useState(CLIENTES);
  const [toasts,setToasts]=useState([]);

  const addToast=(type,msg)=>{
    const id=++_tId;
    setToasts(p=>[...p,{id,type,msg}]);
    setTimeout(()=>setToasts(p=>p.filter(t=>t.id!==id)),4000);
  };

  const now=new Date();
  const mk=`${now.getFullYear()}-${String(now.getMonth()+1).padStart(2,"0")}`;
  const v=pct(periodos[mk]);
  const pendCrit=DOCS.filter(d=>d.req&&periodos[mk]?.docs[d.id]?.status!=="aprobado").length;

  const NAV=[
    {id:"dashboard",  label:"Panel General",       icon:I.chart,    badge:null,    grp:"Principal"},
    {id:"documentos", label:"Documentos",           icon:I.file,     badge:null,    grp:"Principal"},
    {id:"nube",       label:"Nube & Archivos",      icon:I.cloud,    badge:null,    grp:"Principal"},
    {id:"clientes",   label:"Clientes & Envíos",    icon:I.building, badge:null,    grp:"Operaciones"},
    {id:"contratos",  label:"Contratos",            icon:I.folder,   badge:null,    grp:"Operaciones"},
    {id:"sisub",      label:"SISUB",                icon:I.star,     badge:null,    grp:"Operaciones"},
    {id:"fonacot",    label:"FONACOT",              icon:I.package,  badge:1,       grp:"Operaciones"},
    {id:"icsoe",      label:"ICSOE Cuatrimestral",  icon:I.send,     badge:null,    grp:"IMSS"},
    {id:"alertas",    label:"Alertas",              icon:I.alert,    badge:pendCrit>0?pendCrit:null, grp:"IMSS"},
  ];

  const TITLES={dashboard:"Panel General",documentos:"Gestión Documental",nube:"Nube & Archivos",clientes:"Clientes & Envíos",contratos:"Contratos",sisub:"SISUB — Subcontratación",fonacot:"FONACOT — Créditos de Nómina",icsoe:"ICSOE — Informativa Cuatrimestral",alertas:"Alertas & Vencimientos"};
  const SUBS={dashboard:`Resumen ejecutivo de cumplimiento REPSE — ${MESES[now.getMonth()]} ${now.getFullYear()}`,documentos:"Carga, valida y aprueba documentos. Se guardan automáticamente en la nube.",nube:"Archivos almacenados en cloud — storage.micsa.com",clientes:"Gestiona clientes y envía expedientes completos por correo automático",contratos:"Contratos de servicio con clientes y contratos laborales de trabajadores",sisub:"Registro de subcontratistas y reporte mensual de trabajadores por cliente",fonacot:"Control de créditos activos y retenciones mensuales en nómina",icsoe:"Reporte cuatrimestral de contratos al IMSS via portal ICSOE · Art. 15-A LSS",alertas:"Documentos faltantes y vencimientos próximos"};

  const grps=[...new Set(NAV.map(n=>n.grp))];

  return (
    <>
      <style>{GLOBAL_CSS}</style>
      <div className="app">
        <aside className="sidebar">
          <div className="sb-brand">
            <div className="sb-logo">MIC<span>SA</span></div>
            <div className="sb-sub">Compliance Engine</div>
            <div className="sb-pill">REPSE · IMSS · SAT · CLOUD</div>
          </div>
          <nav className="nav">
            {grps.map(g=>(
              <div key={g}>
                <div className="nav-lbl">{g}</div>
                {NAV.filter(n=>n.grp===g).map(n=>(
                  <div key={n.id} className={`nav-item ${view===n.id?"on":""}`} onClick={()=>setView(n.id)}>
                    <div className="nav-ic"><Ic d={n.icon} s={16}/></div>{n.label}
                    {n.badge&&<span className="nav-badge">{n.badge}</span>}
                  </div>
                ))}
              </div>
            ))}
          </nav>
          <div className="sb-foot">
            <div className="co-card">
              <div className="co-rfc">MIC2301268S5</div>
              <div className="co-name">MICSA S.A. de C.V.</div>
              <div className="co-name" style={{fontSize:10,opacity:.6,marginTop:1}}>Monclova, Coahuila</div>
              <div className="co-bar">
                <div className="co-track"><div className="co-fill" style={{width:`${v}%`,background:pColor(v)}}/></div>
                <span className="co-pct" style={{color:pColor(v)}}>{v}%</span>
              </div>
              <div style={{marginTop:6}}><Semaforo v={v}/></div>
            </div>
          </div>
        </aside>

        <main className="main">
          <div className="topbar">
            <div className="tb-bc">
              <span className="tb-sec">MICSA</span>
              <span className="tb-sep">/</span>
              <span className="tb-pg">{TITLES[view]}</span>
            </div>
            <div className="tb-right">
              <div className="cloud-pill"><div className="cloud-dot"/>Cloud Activo</div>
              <span className={`badge ${pBadge(v)}`}><Semaforo v={v}/>{MESES[now.getMonth()]} — {v}%</span>
            </div>
          </div>

          <div className="content">
            <div className="page-hdr">
              <div className="page-title">{TITLES[view]}</div>
              <div className="page-sub">{SUBS[view]}</div>
            </div>
            {view==="dashboard"  && <Dashboard periodos={periodos} clientes={clientes}/>}
            {view==="documentos" && <Documentos periodos={periodos} setPeriodos={setPeriodos} addToast={addToast}/>}
            {view==="nube"       && <Nube periodos={periodos} addToast={addToast}/>}
            {view==="clientes"   && <Clientes clientes={clientes} setClientes={setClientes} periodos={periodos} addToast={addToast}/>}
            {view==="contratos"  && <CONTRATOS addToast={addToast}/>}
            {view==="sisub"      && <SISUB addToast={addToast}/>}
            {view==="fonacot"    && <FONACOT addToast={addToast}/>}
            {view==="icsoe"      && <ICSOE addToast={addToast}/>}
            {view==="alertas"    && <Alertas periodos={periodos}/>}
          </div>
        </main>
      </div>

      <div className="toast-wrap">
        {toasts.map(t=>(
          <div key={t.id} className={`toast toast-${t.type}`}>
            <div className="toast-ic"><Ic d={t.type==="success"?I.check:t.type==="error"?I.x:I.info} s={14}/></div>
            {t.msg}
          </div>
        ))}
      </div>
    </>
  );
}
