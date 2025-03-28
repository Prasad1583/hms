(function(){"use strict";var e={6547:function(e,t,a){var s=a(3751),n=a(641),l=a(33);const o={class:"max-w-7xl mx-auto px-4 sm:px-6 py-8 bg-gray-50"},i={class:"flex flex-wrap justify-center gap-2 mt-4 sm:mt-8 mb-8"};function d(e,t,a,s,d,r){const c=(0,n.g2)("router-link"),p=(0,n.g2)("router-view");return(0,n.uX)(),(0,n.CE)("div",o,[t[0]||(t[0]=(0,n.Lk)("header",{class:"mb-6 text-center"},[(0,n.Lk)("h1",{class:"text-3xl sm:text-4xl font-bold text-primary flex flex-wrap justify-center gap-2"},[(0,n.eW)(" 🏨 "),(0,n.Lk)("span",null,"Hostel Management System")])],-1)),(0,n.Lk)("div",i,[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(d.tabs,(t=>((0,n.uX)(),(0,n.Wv)(c,{key:t.path,to:t.path,class:(0,l.C4)(["px-4 py-2 rounded-md font-medium shadow",{"bg-primary text-white":e.$route.path===t.path,"bg-white border text-gray-700 hover:bg-gray-100":e.$route.path!==t.path}])},{default:(0,n.k6)((()=>[(0,n.eW)((0,l.v_)(t.label),1)])),_:2},1032,["to","class"])))),128))]),(0,n.bF)(p)])}var r={name:"App",data(){return{tabs:[{label:"Dashboard",path:"/dashboard"},{label:"Tenants",path:"/tenants"},{label:"Staff",path:"/staff"},{label:"Expenses",path:"/expenses"},{label:"Reports",path:"/reports"}]}}},c=a(6262);const p=(0,c.A)(r,[["render",d],["__scopeId","data-v-471a5216"]]);var m=p,u=a(5220);const h={class:"p-6"};function y(e,t,a,s,l,o){return(0,n.uX)(),(0,n.CE)("section",h,t[0]||(t[0]=[(0,n.Fv)('<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6" data-v-41c57fb4><div class="bg-gradient-to-br from-emerald-400 to-emerald-600 text-white p-4 rounded-xl shadow hover:scale-105 transition" data-v-41c57fb4><h3 class="text-lg font-semibold" data-v-41c57fb4>🏠 Total Tenants</h3><p class="text-3xl font-bold mt-2" data-v-41c57fb4>120</p></div><div class="bg-gradient-to-br from-blue-400 to-blue-600 text-white p-4 rounded-xl shadow hover:scale-105 transition" data-v-41c57fb4><h3 class="text-lg font-semibold" data-v-41c57fb4>👨‍💼 Total Staff</h3><p class="text-3xl font-bold mt-2" data-v-41c57fb4>15</p></div><div class="bg-gradient-to-br from-pink-400 to-pink-600 text-white p-4 rounded-xl shadow hover:scale-105 transition" data-v-41c57fb4><h3 class="text-lg font-semibold" data-v-41c57fb4>💰 Monthly Income</h3><p class="text-3xl font-bold mt-2" data-v-41c57fb4>₹1,20,000</p></div><div class="bg-gradient-to-br from-yellow-400 to-yellow-600 text-white p-4 rounded-xl shadow hover:scale-105 transition" data-v-41c57fb4><h3 class="text-lg font-semibold" data-v-41c57fb4>📉 Monthly Expenses</h3><p class="text-3xl font-bold mt-2" data-v-41c57fb4>₹45,000</p></div></div><div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6" data-v-41c57fb4><div class="bg-white p-6 rounded-xl shadow" data-v-41c57fb4><h2 class="text-lg font-semibold mb-4" data-v-41c57fb4>📈 Payment Overview</h2><canvas id="paymentChart" class="w-full h-48" data-v-41c57fb4></canvas></div><div class="bg-white p-6 rounded-xl shadow" data-v-41c57fb4><h2 class="text-lg font-semibold mb-4" data-v-41c57fb4>📝 Recent Activities</h2><ul class="text-sm text-gray-700 list-disc list-inside space-y-1" data-v-41c57fb4><li data-v-41c57fb4>Ravi Kumar paid ₹5000 on Mar 01, 2025</li><li data-v-41c57fb4>New tenant Sneha Sharma added</li><li data-v-41c57fb4>Staff member Ajay joined</li><li data-v-41c57fb4>Electricity bill ₹3500 recorded</li></ul></div></div><div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6" data-v-41c57fb4><div class="bg-white p-6 rounded-xl shadow" data-v-41c57fb4><h2 class="text-lg font-semibold mb-4" data-v-41c57fb4>📅 Upcoming Due Payments</h2><ul class="text-sm text-gray-700 list-disc list-inside space-y-1" data-v-41c57fb4><li data-v-41c57fb4>Ravi Kumar - ₹5000 due on Apr 01, 2025</li><li data-v-41c57fb4>Sneha Sharma - ₹5000 due on Apr 05, 2025</li></ul></div><div class="bg-white p-6 rounded-xl shadow" data-v-41c57fb4><h2 class="text-lg font-semibold mb-4" data-v-41c57fb4>📌 Notices &amp; Reminders</h2><ul class="text-sm text-gray-700 list-disc list-inside space-y-1" data-v-41c57fb4><li data-v-41c57fb4>Annual maintenance scheduled for Apr 10</li><li data-v-41c57fb4>Fire drill on Apr 15 at 10:00 AM</li><li data-v-41c57fb4>Submit electricity readings by Apr 5</li></ul></div></div><div class="grid grid-cols-1 lg:grid-cols-2 gap-6" data-v-41c57fb4><div class="bg-white p-6 rounded-xl shadow" data-v-41c57fb4><h2 class="text-lg font-semibold mb-4" data-v-41c57fb4>📥 Latest Documents</h2><ul class="text-sm text-gray-700 list-disc list-inside space-y-1" data-v-41c57fb4><li data-v-41c57fb4>Ravi_Kumar_Agreement.pdf uploaded</li><li data-v-41c57fb4>Hostel_Rules_March.pdf updated</li><li data-v-41c57fb4>Sneha_ID_Verification.jpg uploaded</li></ul></div><div class="bg-white p-6 rounded-xl shadow" data-v-41c57fb4><h2 class="text-lg font-semibold mb-4" data-v-41c57fb4>📌 Quick Actions</h2><ul class="text-sm text-gray-700 list-disc list-inside space-y-1" data-v-41c57fb4><li data-v-41c57fb4><button class="text-blue-600 hover:underline" data-v-41c57fb4>➕ Add New Tenant</button></li><li data-v-41c57fb4><button class="text-blue-600 hover:underline" data-v-41c57fb4>📆 Schedule Maintenance</button></li><li data-v-41c57fb4><button class="text-blue-600 hover:underline" data-v-41c57fb4>💸 Record Expense</button></li><li data-v-41c57fb4><button class="text-blue-600 hover:underline" data-v-41c57fb4>📊 Generate Monthly Report</button></li></ul></div></div>',4)]))}var x=a(8293),b={name:"DashboardView",mounted(){const e=document.getElementById("paymentChart");new x.Ay(e,{type:"bar",data:{labels:["Jan","Feb","Mar","Apr","May","Jun"],datasets:[{label:"Payments Collected (₹)",data:[8e4,95e3,1e5,85e3,11e4,12e4],backgroundColor:"rgba(34, 197, 94, 0.7)"}]},options:{responsive:!0,plugins:{legend:{display:!1},tooltip:{callbacks:{label:e=>`₹${e.parsed.y}`}}},scales:{y:{beginAtZero:!0,ticks:{callback:e=>`₹${e}`}}}}})}};const f=(0,c.A)(b,[["render",y],["__scopeId","data-v-41c57fb4"]]);var g=f;const v={class:"tab-content"},k={class:"bg-white p-6 rounded-lg shadow"},L={class:"flex justify-between items-center mb-4"},w={class:"overflow-x-auto"},C={class:"flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 space-y-2 sm:space-y-0"},E={class:"text-sm text-gray-600"},P={class:"min-w-full text-sm text-left text-gray-700 border border-gray-200 shadow-sm rounded-xl overflow-hidden"},M={class:"bg-white divide-y divide-gray-200"},S={class:"px-4 py-3 font-medium text-gray-900"},A={class:"px-4 py-3"},j={class:"px-4 py-3"},_={class:"px-4 py-3"},I={class:"px-4 py-3"},F={class:"px-4 py-3"},D={class:"px-4 py-3 space-x-2"},X=["onClick"],T=["onClick"],R=["onClick"],V={class:"mt-4 flex justify-center space-x-2"},Q=["disabled"],O=["disabled"];function N(e,t,a,o,i,d){const r=(0,n.g2)("ViewModal"),c=(0,n.g2)("AddEditModal"),p=(0,n.g2)("DeleteModal");return(0,n.uX)(),(0,n.CE)("section",v,[(0,n.Lk)("div",k,[(0,n.Lk)("div",L,[t[5]||(t[5]=(0,n.Lk)("h2",{class:"text-2xl font-semibold"},"👥 Tenants",-1)),(0,n.Lk)("button",{onClick:t[0]||(t[0]=(...e)=>d.openAddModal&&d.openAddModal(...e)),class:"bg-accent text-white px-4 py-2 rounded hover:bg-emerald-600"}," + Add Tenant ")]),(0,n.Lk)("div",w,[(0,n.Lk)("div",C,[(0,n.bo)((0,n.Lk)("input",{type:"text","onUpdate:modelValue":t[1]||(t[1]=e=>i.searchQuery=e),placeholder:"🔍 Search tenant...",class:"border rounded px-3 py-2 w-full sm:w-64"},null,512),[[s.Jo,i.searchQuery]]),(0,n.Lk)("div",E," Page "+(0,l.v_)(i.currentPage)+" of "+(0,l.v_)(d.totalPages),1)]),(0,n.Lk)("table",P,[t[6]||(t[6]=(0,n.Lk)("thead",{class:"text-xs uppercase bg-gray-100 text-gray-600"},[(0,n.Lk)("tr",null,[(0,n.Lk)("th",{class:"px-4 py-3"},"Name"),(0,n.Lk)("th",{class:"px-4 py-3"},"Phone"),(0,n.Lk)("th",{class:"px-4 py-3"},"Email"),(0,n.Lk)("th",{class:"px-4 py-3"},"Occupation"),(0,n.Lk)("th",{class:"px-4 py-3"},"Joined"),(0,n.Lk)("th",{class:"px-4 py-3"},"Emergency Contact"),(0,n.Lk)("th",{class:"px-4 py-3"},"Actions")])],-1)),(0,n.Lk)("tbody",M,[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(d.paginatedTenants,((e,t)=>((0,n.uX)(),(0,n.CE)("tr",{key:t,class:"hover:bg-gray-50 transition-all"},[(0,n.Lk)("td",S,(0,l.v_)(e.name),1),(0,n.Lk)("td",A,(0,l.v_)(e.phone),1),(0,n.Lk)("td",j,(0,l.v_)(e.email),1),(0,n.Lk)("td",_,(0,l.v_)(e.occupation),1),(0,n.Lk)("td",I,(0,l.v_)(e.joined),1),(0,n.Lk)("td",F,(0,l.v_)(e.emergency),1),(0,n.Lk)("td",D,[(0,n.Lk)("button",{onClick:t=>d.openViewModal(e),class:"inline-flex items-center px-2 py-1 text-blue-600 hover:underline hover:text-blue-800"}," 🔍 View ",8,X),(0,n.Lk)("button",{onClick:a=>d.openEditModal(e,t),class:"inline-flex items-center px-2 py-1 text-yellow-600 hover:underline hover:text-yellow-800"}," ✏️ Edit ",8,T),(0,n.Lk)("button",{onClick:e=>d.openDeleteModal(t),class:"inline-flex items-center px-2 py-1 text-red-600 hover:underline hover:text-red-800"}," ❌ Delete ",8,R)])])))),128))])]),(0,n.Lk)("div",V,[(0,n.Lk)("button",{onClick:t[2]||(t[2]=e=>i.currentPage--),disabled:1===i.currentPage,class:"px-3 py-1 border rounded hover:bg-gray-100 disabled:opacity-50"}," Prev ",8,Q),(0,n.Lk)("button",{onClick:t[3]||(t[3]=e=>i.currentPage++),disabled:i.currentPage===d.totalPages,class:"px-3 py-1 border rounded hover:bg-gray-100 disabled:opacity-50"}," Next ",8,O)])])]),i.modals.view?((0,n.uX)(),(0,n.Wv)(r,{key:0,title:"Tenant",data:i.selectedTenant,fields:{name:"Name",phone:"Phone",email:"Email",occupation:"Occupation",joined:"Joined Date",emergency:"Emergency Contact"},onClose:d.closeModals},null,8,["data","onClose"])):(0,n.Q3)("",!0),i.modals.add||i.modals.edit?((0,n.uX)(),(0,n.Wv)(c,{key:1,title:"Tenant",isEdit:i.modals.edit,form:i.form,fields:[{key:"name",label:"Name",required:!0},{key:"phone",label:"Phone",required:!0},{key:"email",label:"Email",type:"email"},{key:"occupation",label:"Occupation"},{key:"joined",label:"Joined Date",type:"date"},{key:"emergency",label:"Emergency Contact"}],onSubmit:t[4]||(t[4]=e=>i.modals.add?d.addTenant:d.updateTenant),onClose:d.closeModals},null,8,["isEdit","form","onClose"])):(0,n.Q3)("",!0),i.modals.delete?((0,n.uX)(),(0,n.Wv)(p,{key:2,title:"Tenant",onConfirm:d.deleteTenant,onClose:d.closeModals},null,8,["onConfirm","onClose"])):(0,n.Q3)("",!0)])}a(4114),a(8111),a(2489);const W={class:"fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"},J={class:"bg-white p-6 rounded-lg w-full max-w-md"},K={class:"text-xl font-semibold mb-4"},$={class:"flex justify-end mt-4"};function q(e,t,a,s,o,i){return(0,n.uX)(),(0,n.CE)("div",W,[(0,n.Lk)("div",J,[(0,n.Lk)("h3",K,(0,l.v_)(a.title)+" Details",1),((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(a.fields,((e,t)=>((0,n.uX)(),(0,n.CE)("div",{key:t},[(0,n.Lk)("p",null,[(0,n.Lk)("strong",null,(0,l.v_)(e)+":",1),(0,n.eW)(" "+(0,l.v_)(a.data[t]),1)])])))),128)),(0,n.Lk)("div",$,[(0,n.Lk)("button",{onClick:t[0]||(t[0]=t=>e.$emit("close")),class:"px-4 py-2 bg-primary text-white rounded"},"Close")])])])}var U={props:{title:String,data:Object,fields:Object}};const G=(0,c.A)(U,[["render",q]]);var H=G;const B={class:"fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"},z={class:"bg-white p-6 rounded-lg w-full max-w-lg"},Y={class:"text-xl font-semibold mb-4"},Z={class:"space-y-4"},ee=["onUpdate:modelValue","type","placeholder","required"],te={class:"flex justify-end space-x-2 mt-4"},ae={type:"submit",class:"px-4 py-2 bg-accent text-white rounded"};function se(e,t,a,o,i,d){return(0,n.uX)(),(0,n.CE)("div",B,[(0,n.Lk)("div",z,[(0,n.Lk)("h3",Y,(0,l.v_)(a.isEdit?"Edit":"Add")+" "+(0,l.v_)(a.title),1),(0,n.Lk)("form",{onSubmit:t[1]||(t[1]=(0,s.D$)((t=>e.$emit("submit",i.localForm)),["prevent"]))},[(0,n.Lk)("div",Z,[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(a.fields,(e=>((0,n.uX)(),(0,n.CE)("div",{key:e.key},[(0,n.bo)((0,n.Lk)("input",{"onUpdate:modelValue":t=>i.localForm[e.key]=t,type:e.type||"text",placeholder:e.placeholder||e.label,class:"w-full p-2 border rounded",required:e.required},null,8,ee),[[s.hp,i.localForm[e.key]]])])))),128))]),(0,n.Lk)("div",te,[(0,n.Lk)("button",{type:"button",onClick:t[0]||(t[0]=t=>e.$emit("close")),class:"px-4 py-2 bg-gray-300 rounded"},"Cancel"),(0,n.Lk)("button",ae,(0,l.v_)(a.isEdit?"Update":"Save"),1)])],32)])])}var ne={props:{title:String,isEdit:Boolean,form:Object,fields:Array},data(){return{localForm:{...this.form}}},watch:{form:{handler(e){this.localForm={...e}},deep:!0,immediate:!0}}};const le=(0,c.A)(ne,[["render",se]]);var oe=le;const ie={class:"fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"},de={class:"bg-white p-6 rounded-lg w-full max-w-sm text-center"},re={class:"flex justify-center gap-4"};function ce(e,t,a,s,l,o){return(0,n.uX)(),(0,n.CE)("div",ie,[(0,n.Lk)("div",de,[t[2]||(t[2]=(0,n.Lk)("h3",{class:"text-xl font-semibold mb-4"},"Are you sure?",-1)),t[3]||(t[3]=(0,n.Lk)("p",{class:"text-gray-600 mb-6"},"This will permanently delete the tenant's data.",-1)),(0,n.Lk)("div",re,[(0,n.Lk)("button",{onClick:t[0]||(t[0]=t=>e.$emit("close")),class:"px-4 py-2 bg-gray-300 rounded"},"Cancel"),(0,n.Lk)("button",{onClick:t[1]||(t[1]=t=>e.$emit("confirm")),class:"px-4 py-2 bg-red-600 text-white rounded"},"Delete")])])])}var pe={emits:["close","confirm"]};const me=(0,c.A)(pe,[["render",ce]]);var ue=me,he={name:"TenantsView",components:{ViewModal:H,AddEditModal:oe,DeleteModal:ue},data(){return{searchQuery:"",currentPage:1,itemsPerPage:5,tenants:[{name:"Ravi Kumar",phone:"9876543210",email:"ravi@example.com",occupation:"Engineer",joined:"2024-11-01",emergency:"Raj (Father) - 9871234567"},{name:"Sneha Sharma",phone:"9876543211",email:"sneha@example.com",occupation:"Designer",joined:"2024-12-10",emergency:"Amit (Brother) - 9876543219"},{name:"Arjun Mehta",phone:"9876543212",email:"arjun@example.com",occupation:"Accountant",joined:"2025-01-05",emergency:"Sunil (Friend) - 9871234568"},{name:"Priya Das",phone:"9876543213",email:"priya@example.com",occupation:"Teacher",joined:"2024-10-22",emergency:"Neha (Sister) - 9876543216"},{name:"Vikram Sen",phone:"9876543214",email:"vikram@example.com",occupation:"Developer",joined:"2024-09-14",emergency:"Deepak (Cousin) - 9871234569"},{name:"Nikita Rao",phone:"9876543215",email:"nikita@example.com",occupation:"Student",joined:"2025-02-01",emergency:"Manoj (Father) - 9871234570"},{name:"Kunal Verma",phone:"9876543216",email:"kunal@example.com",occupation:"Analyst",joined:"2024-08-19",emergency:"Rina (Wife) - 9876543220"},{name:"Anjali Nair",phone:"9876543217",email:"anjali@example.com",occupation:"Nurse",joined:"2025-03-01",emergency:"Rajeev (Brother) - 9871234571"},{name:"Mohit Jain",phone:"9876543218",email:"mohit@example.com",occupation:"Lawyer",joined:"2024-11-30",emergency:"Reena (Sister) - 9871234572"},{name:"Pooja Singh",phone:"9876543219",email:"pooja@example.com",occupation:"HR Manager",joined:"2025-01-20",emergency:"Suresh (Uncle) - 9871234573"}],form:{name:"",phone:"",email:"",occupation:"",joined:"",emergency:""},selectedTenant:{},selectedIndex:null,modals:{add:!1,edit:!1,view:!1,delete:!1}}},computed:{filteredTenants(){return this.tenants.filter((e=>e.name.toLowerCase().includes(this.searchQuery.toLowerCase())||e.phone.includes(this.searchQuery)||e.email.toLowerCase().includes(this.searchQuery.toLowerCase())))},paginatedTenants(){const e=(this.currentPage-1)*this.itemsPerPage;return this.filteredTenants.slice(e,e+this.itemsPerPage)},totalPages(){return Math.ceil(this.filteredTenants.length/this.itemsPerPage)}},methods:{openAddModal(){this.resetForm(),this.modals.add=!0},openViewModal(e){this.selectedTenant=e,this.modals.view=!0},openEditModal(e,t){this.form={...e},this.selectedIndex=t,this.modals.edit=!0},openDeleteModal(e){this.selectedIndex=e,this.modals.delete=!0},addTenant(e){this.tenants.push({...e}),this.closeModals()},updateTenant(e){this.tenants[this.selectedIndex]={...e},this.closeModals()},deleteTenant(){this.tenants.splice(this.selectedIndex,1),this.closeModals()},closeModals(){this.modals={add:!1,edit:!1,view:!1,delete:!1}},resetForm(){this.form={name:"",phone:"",email:"",occupation:"",joined:"",emergency:""}}}};const ye=(0,c.A)(he,[["render",N],["__scopeId","data-v-c7a56c36"]]);var xe=ye;const be={class:"tab-content"},fe={class:"bg-white p-6 rounded-lg shadow"},ge={class:"flex justify-between items-center mb-4"},ve={class:"overflow-x-auto"},ke={class:"flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 space-y-2 sm:space-y-0"},Le={class:"text-sm text-gray-600"},we={class:"min-w-full text-sm text-left text-gray-700 border border-gray-200 shadow-sm rounded-xl overflow-hidden"},Ce={class:"bg-white divide-y divide-gray-200"},Ee={class:"px-4 py-3 font-medium text-gray-900"},Pe={class:"px-4 py-3"},Me={class:"px-4 py-3"},Se={class:"px-4 py-3"},Ae={class:"px-4 py-3"},je={class:"px-4 py-3 space-x-2"},_e=["onClick"],Ie=["onClick"],Fe=["onClick"],De={class:"mt-4 flex justify-center space-x-2"},Xe=["disabled"],Te=["disabled"];function Re(e,t,a,o,i,d){const r=(0,n.g2)("ViewModal"),c=(0,n.g2)("AddEditModal"),p=(0,n.g2)("DeleteModal");return(0,n.uX)(),(0,n.CE)("section",be,[(0,n.Lk)("div",fe,[(0,n.Lk)("div",ge,[t[5]||(t[5]=(0,n.Lk)("h2",{class:"text-2xl font-semibold"},"👨‍💼 Staff",-1)),(0,n.Lk)("button",{onClick:t[0]||(t[0]=(...e)=>d.openAddModal&&d.openAddModal(...e)),class:"bg-accent text-white px-4 py-2 rounded hover:bg-emerald-600"}," + Add Staff ")]),(0,n.Lk)("div",ve,[(0,n.Lk)("div",ke,[(0,n.bo)((0,n.Lk)("input",{type:"text","onUpdate:modelValue":t[1]||(t[1]=e=>i.searchQuery=e),placeholder:"🔍 Search staff...",class:"border rounded px-3 py-2 w-full sm:w-64"},null,512),[[s.Jo,i.searchQuery]]),(0,n.Lk)("div",Le," Page "+(0,l.v_)(i.currentPage)+" of "+(0,l.v_)(d.totalPages),1)]),(0,n.Lk)("table",we,[t[6]||(t[6]=(0,n.Lk)("thead",{class:"text-xs uppercase bg-gray-100 text-gray-600"},[(0,n.Lk)("tr",null,[(0,n.Lk)("th",{class:"px-4 py-3"},"Name"),(0,n.Lk)("th",{class:"px-4 py-3"},"Phone"),(0,n.Lk)("th",{class:"px-4 py-3"},"Email"),(0,n.Lk)("th",{class:"px-4 py-3"},"Role"),(0,n.Lk)("th",{class:"px-4 py-3"},"Joined"),(0,n.Lk)("th",{class:"px-4 py-3"},"Actions")])],-1)),(0,n.Lk)("tbody",Ce,[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(d.paginatedStaff,((e,t)=>((0,n.uX)(),(0,n.CE)("tr",{key:t,class:"hover:bg-gray-50 transition-all"},[(0,n.Lk)("td",Ee,(0,l.v_)(e.name),1),(0,n.Lk)("td",Pe,(0,l.v_)(e.phone),1),(0,n.Lk)("td",Me,(0,l.v_)(e.email),1),(0,n.Lk)("td",Se,(0,l.v_)(e.role),1),(0,n.Lk)("td",Ae,(0,l.v_)(e.joined),1),(0,n.Lk)("td",je,[(0,n.Lk)("button",{onClick:t=>d.openViewModal(e),class:"inline-flex items-center px-2 py-1 text-blue-600 hover:underline hover:text-blue-800"}," 🔍 View ",8,_e),(0,n.Lk)("button",{onClick:a=>d.openEditModal(e,t),class:"inline-flex items-center px-2 py-1 text-yellow-600 hover:underline hover:text-yellow-800"}," ✏️ Edit ",8,Ie),(0,n.Lk)("button",{onClick:e=>d.openDeleteModal(t),class:"inline-flex items-center px-2 py-1 text-red-600 hover:underline hover:text-red-800"}," ❌ Delete ",8,Fe)])])))),128))])]),(0,n.Lk)("div",De,[(0,n.Lk)("button",{onClick:t[2]||(t[2]=e=>i.currentPage--),disabled:1===i.currentPage,class:"px-3 py-1 border rounded hover:bg-gray-100 disabled:opacity-50"}," Prev ",8,Xe),(0,n.Lk)("button",{onClick:t[3]||(t[3]=e=>i.currentPage++),disabled:i.currentPage===d.totalPages,class:"px-3 py-1 border rounded hover:bg-gray-100 disabled:opacity-50"}," Next ",8,Te)])])]),i.modals.view?((0,n.uX)(),(0,n.Wv)(r,{key:0,title:"Staff",data:i.selectedStaff,fields:{name:"Name",phone:"Phone",email:"Email",role:"Role",joined:"Joined Date"},onClose:d.closeModals},null,8,["data","onClose"])):(0,n.Q3)("",!0),i.modals.add||i.modals.edit?((0,n.uX)(),(0,n.Wv)(c,{key:1,title:"Staff",isEdit:i.modals.edit,form:i.form,fields:[{key:"name",label:"Name",required:!0},{key:"phone",label:"Phone",required:!0},{key:"email",label:"Email",type:"email"},{key:"role",label:"Role"},{key:"joined",label:"Joined Date",type:"date"}],onSubmit:t[4]||(t[4]=e=>i.modals.add?d.addStaff:d.updateStaff),onClose:d.closeModals},null,8,["isEdit","form","onClose"])):(0,n.Q3)("",!0),i.modals.delete?((0,n.uX)(),(0,n.Wv)(p,{key:2,title:"Staff",onConfirm:d.deleteStaff,onClose:d.closeModals},null,8,["onConfirm","onClose"])):(0,n.Q3)("",!0)])}var Ve={name:"StaffView",components:{ViewModal:H,AddEditModal:oe,DeleteModal:ue},data(){return{searchQuery:"",currentPage:1,itemsPerPage:5,staffList:[{name:"Ajay Sharma",phone:"9990001111",email:"ajay@example.com",role:"Manager",joined:"2024-05-01"},{name:"Neha Singh",phone:"9990001112",email:"neha@example.com",role:"Receptionist",joined:"2024-06-15"},{name:"Vikas Rao",phone:"9990001113",email:"vikas@example.com",role:"Cleaner",joined:"2024-07-01"},{name:"Kiran Patil",phone:"9990001114",email:"kiran@example.com",role:"Security",joined:"2024-08-20"},{name:"Alok Verma",phone:"9990001115",email:"alok@example.com",role:"Cook",joined:"2024-09-10"}],form:{name:"",phone:"",email:"",role:"",joined:""},selectedStaff:{},selectedIndex:null,modals:{add:!1,edit:!1,view:!1,delete:!1}}},computed:{filteredStaff(){return this.staffList.filter((e=>e.name.toLowerCase().includes(this.searchQuery.toLowerCase())||e.phone.includes(this.searchQuery)||e.email.toLowerCase().includes(this.searchQuery.toLowerCase())))},paginatedStaff(){const e=(this.currentPage-1)*this.itemsPerPage;return this.filteredStaff.slice(e,e+this.itemsPerPage)},totalPages(){return Math.max(1,Math.ceil(this.filteredStaff.length/this.itemsPerPage))}},watch:{searchQuery(){this.currentPage=1}},methods:{openAddModal(){this.resetForm(),this.modals.add=!0},openViewModal(e){this.selectedStaff=e,this.modals.view=!0},openEditModal(e,t){this.form={...e},this.selectedIndex=t,this.modals.edit=!0},openDeleteModal(e){this.selectedIndex=e,this.modals.delete=!0},addStaff(e){this.staffList.push({...e}),this.closeModals()},updateStaff(e){this.staffList[this.selectedIndex]={...e},this.closeModals()},deleteStaff(){this.staffList.splice(this.selectedIndex,1),this.closeModals()},closeModals(){this.modals={add:!1,edit:!1,view:!1,delete:!1}},resetForm(){this.form={name:"",phone:"",email:"",role:"",joined:""}}}};const Qe=(0,c.A)(Ve,[["render",Re],["__scopeId","data-v-7f23260a"]]);var Oe=Qe;const Ne={class:"tab-content"},We={class:"bg-white p-6 rounded-lg shadow"},Je={class:"overflow-x-auto"},Ke={class:"min-w-full text-sm text-left text-gray-600"},$e={class:"bg-white divide-y"},qe={class:"px-4 py-2"},Ue={class:"px-4 py-2"},Ge={class:"px-4 py-2"},He={class:"px-4 py-2"},Be={class:"px-4 py-2"},ze=["onClick"],Ye={key:0,class:"bg-gray-50"},Ze={colspan:"5",class:"px-4 py-4"},et={class:"grid grid-cols-1 md:grid-cols-2 gap-4"},tt={class:"flex items-center gap-2"},at={class:"text-sm list-disc list-inside"},st={key:0};function nt(e,t,a,o,i,d){return(0,n.uX)(),(0,n.CE)("section",Ne,[(0,n.Lk)("div",We,[t[6]||(t[6]=(0,n.Lk)("h2",{class:"text-2xl font-semibold mb-4"},"💸 Tenant Payments",-1)),(0,n.Lk)("div",Je,[(0,n.Lk)("table",Ke,[t[5]||(t[5]=(0,n.Lk)("thead",{class:"text-xs uppercase bg-gray-100 text-gray-700"},[(0,n.Lk)("tr",null,[(0,n.Lk)("th",{class:"px-4 py-2"},"Name"),(0,n.Lk)("th",{class:"px-4 py-2"},"Phone"),(0,n.Lk)("th",{class:"px-4 py-2"},"Email"),(0,n.Lk)("th",{class:"px-4 py-2"},"Occupation"),(0,n.Lk)("th",{class:"px-4 py-2"},"Actions")])],-1)),(0,n.Lk)("tbody",$e,[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(i.tenants,((e,t)=>((0,n.uX)(),(0,n.CE)("tr",{key:t},[(0,n.Lk)("td",qe,(0,l.v_)(e.name),1),(0,n.Lk)("td",Ue,(0,l.v_)(e.phone),1),(0,n.Lk)("td",Ge,(0,l.v_)(e.email),1),(0,n.Lk)("td",He,(0,l.v_)(e.occupation),1),(0,n.Lk)("td",Be,[(0,n.Lk)("button",{onClick:e=>d.togglePayment(t),class:"bg-emerald-500 text-white px-3 py-1 rounded hover:bg-emerald-600"},(0,l.v_)(i.paymentIndex===t?"Close":"Add Payment"),9,ze)])])))),128)),i.paymentIndex===e.index?((0,n.uX)(),(0,n.CE)("tr",Ye,[(0,n.Lk)("td",Ze,[(0,n.Lk)("div",et,[(0,n.Lk)("div",null,[t[3]||(t[3]=(0,n.Lk)("h3",{class:"text-lg font-semibold mb-2"},"➕ Add Payment",-1)),(0,n.Lk)("div",tt,[(0,n.bo)((0,n.Lk)("input",{"onUpdate:modelValue":t[0]||(t[0]=e=>i.paymentForm.amount=e),type:"number",placeholder:"Amount",class:"border px-2 py-1 rounded w-24"},null,512),[[s.Jo,i.paymentForm.amount]]),(0,n.bo)((0,n.Lk)("input",{"onUpdate:modelValue":t[1]||(t[1]=e=>i.paymentForm.date=e),type:"date",class:"border px-2 py-1 rounded"},null,512),[[s.Jo,i.paymentForm.date]]),(0,n.Lk)("button",{onClick:t[2]||(t[2]=t=>d.addPayment(e.index)),class:"bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"}," Save ")])]),(0,n.Lk)("div",null,[t[4]||(t[4]=(0,n.Lk)("h3",{class:"text-lg font-semibold mb-2"},"📜 Last 10 Payments",-1)),(0,n.Lk)("ul",at,[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)((e.tenant.payments||[]).slice(-10).reverse(),((e,t)=>((0,n.uX)(),(0,n.CE)("li",{key:t}," ₹"+(0,l.v_)(e.amount)+" on "+(0,l.v_)(e.date),1)))),128)),e.tenant.payments&&0!==e.tenant.payments.length?(0,n.Q3)("",!0):((0,n.uX)(),(0,n.CE)("li",st," No payments found. "))])])])])])):(0,n.Q3)("",!0)])])])])])}var lt={name:"PaymentsView",data(){return{tenants:[{name:"Ravi Kumar",phone:"9876543210",email:"ravi@example.com",occupation:"Engineer",payments:[{amount:5e3,date:"2025-03-01"},{amount:5e3,date:"2025-02-01"}]},{name:"Sneha Sharma",phone:"9876543211",email:"sneha@example.com",occupation:"Designer",payments:[]}],paymentIndex:null,paymentForm:{amount:"",date:""}}},methods:{togglePayment(e){this.paymentIndex===e?this.paymentIndex=null:(this.paymentIndex=e,this.paymentForm={amount:"",date:""})},addPayment(e){this.paymentForm.amount&&this.paymentForm.date?(this.tenants[e].payments||this.$set(this.tenants[e],"payments",[]),this.tenants[e].payments.push({...this.paymentForm}),this.paymentForm={amount:"",date:""}):alert("Please enter amount and date.")}}};const ot=(0,c.A)(lt,[["render",nt],["__scopeId","data-v-fb3afee8"]]);var it=ot;const dt={class:"tab-content"},rt={class:"bg-white p-6 rounded-lg shadow"},ct={class:"flex justify-between items-center mb-4"},pt={class:"overflow-x-auto"},mt={class:"flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 space-y-2 sm:space-y-0"},ut={class:"text-sm text-gray-600"},ht={class:"min-w-full text-sm text-left text-gray-700 border border-gray-200 shadow-sm rounded-xl overflow-hidden"},yt={class:"bg-white divide-y divide-gray-200"},xt={class:"px-4 py-3"},bt={class:"px-4 py-3"},ft={class:"px-4 py-3"},gt={class:"px-4 py-3 font-medium text-gray-900"},vt={class:"px-4 py-3 space-x-2"},kt=["onClick"],Lt=["onClick"],wt={class:"mt-4 flex justify-center space-x-2"},Ct=["disabled"],Et=["disabled"];function Pt(e,t,a,o,i,d){const r=(0,n.g2)("AddEditModal"),c=(0,n.g2)("DeleteModal");return(0,n.uX)(),(0,n.CE)("section",dt,[(0,n.Lk)("div",rt,[(0,n.Lk)("div",ct,[t[5]||(t[5]=(0,n.Lk)("h2",{class:"text-2xl font-semibold"},"💸 Expenses",-1)),(0,n.Lk)("button",{onClick:t[0]||(t[0]=(...e)=>d.openAddModal&&d.openAddModal(...e)),class:"bg-accent text-white px-4 py-2 rounded hover:bg-emerald-600"}," + Add Expense ")]),(0,n.Lk)("div",pt,[(0,n.Lk)("div",mt,[(0,n.bo)((0,n.Lk)("input",{type:"text","onUpdate:modelValue":t[1]||(t[1]=e=>i.searchQuery=e),placeholder:"🔍 Search expense...",class:"border rounded px-3 py-2 w-full sm:w-64"},null,512),[[s.Jo,i.searchQuery]]),(0,n.Lk)("div",ut," Page "+(0,l.v_)(i.currentPage)+" of "+(0,l.v_)(d.totalPages),1)]),(0,n.Lk)("table",ht,[t[6]||(t[6]=(0,n.Lk)("thead",{class:"text-xs uppercase bg-gray-100 text-gray-600"},[(0,n.Lk)("tr",null,[(0,n.Lk)("th",{class:"px-4 py-3"},"Date"),(0,n.Lk)("th",{class:"px-4 py-3"},"Category"),(0,n.Lk)("th",{class:"px-4 py-3"},"Description"),(0,n.Lk)("th",{class:"px-4 py-3"},"Amount"),(0,n.Lk)("th",{class:"px-4 py-3"},"Actions")])],-1)),(0,n.Lk)("tbody",yt,[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(d.paginatedExpenses,((e,t)=>((0,n.uX)(),(0,n.CE)("tr",{key:t,class:"hover:bg-gray-50 transition-all"},[(0,n.Lk)("td",xt,(0,l.v_)(e.date),1),(0,n.Lk)("td",bt,(0,l.v_)(e.category),1),(0,n.Lk)("td",ft,(0,l.v_)(e.description),1),(0,n.Lk)("td",gt,"₹"+(0,l.v_)(e.amount),1),(0,n.Lk)("td",vt,[(0,n.Lk)("button",{onClick:a=>d.openEditModal(e,t),class:"inline-flex items-center px-2 py-1 text-yellow-600 hover:underline hover:text-yellow-800"}," ✏️ Edit ",8,kt),(0,n.Lk)("button",{onClick:e=>d.openDeleteModal(t),class:"inline-flex items-center px-2 py-1 text-red-600 hover:underline hover:text-red-800"}," ❌ Delete ",8,Lt)])])))),128))])]),(0,n.Lk)("div",wt,[(0,n.Lk)("button",{onClick:t[2]||(t[2]=e=>i.currentPage--),disabled:1===i.currentPage,class:"px-3 py-1 border rounded hover:bg-gray-100 disabled:opacity-50"}," Prev ",8,Ct),(0,n.Lk)("button",{onClick:t[3]||(t[3]=e=>i.currentPage++),disabled:i.currentPage===d.totalPages,class:"px-3 py-1 border rounded hover:bg-gray-100 disabled:opacity-50"}," Next ",8,Et)])])]),i.modals.add||i.modals.edit?((0,n.uX)(),(0,n.Wv)(r,{key:0,title:"Expense",isEdit:i.modals.edit,form:i.form,fields:[{key:"date",label:"Date",type:"date",required:!0},{key:"category",label:"Category",type:"select",options:i.expenseCategories,required:!0},{key:"description",label:"Description"},{key:"amount",label:"Amount",type:"number",required:!0}],onSubmit:t[4]||(t[4]=e=>i.modals.add?d.addExpense:d.updateExpense),onClose:d.closeModals},null,8,["isEdit","form","fields","onClose"])):(0,n.Q3)("",!0),i.modals.delete?((0,n.uX)(),(0,n.Wv)(c,{key:1,title:"Expense",onConfirm:d.deleteExpense,onClose:d.closeModals},null,8,["onConfirm","onClose"])):(0,n.Q3)("",!0)])}var Mt={name:"ExpensesView",components:{AddEditModal:oe,DeleteModal:ue},data(){return{searchQuery:"",currentPage:1,itemsPerPage:5,expenses:[{date:"2025-03-01",category:"Electricity",description:"March bill",amount:3500},{date:"2025-03-05",category:"Maintenance",description:"Plumbing repair",amount:1200},{date:"2025-03-10",category:"Supplies",description:"Cleaning supplies",amount:800},{date:"2025-03-12",category:"Internet",description:"WiFi charges",amount:1500},{date:"2025-03-15",category:"Groceries",description:"Hostel food",amount:6500}],form:{date:"",category:"",description:"",amount:""},expenseCategories:["Electricity","Water","Internet","Maintenance","Cleaning Supplies","Groceries","Staff Salaries","Security Services","Repairs","Laundry Services","Furniture & Fixtures","Stationery","Medical Supplies","Waste Management","Pest Control","Gardening","Gas Cylinders","Transport","Appliance Maintenance","Subscription Services","IT & Software","Legal & Compliance","Insurance","Printing & Photocopy","Marketing & Advertising","Training & Workshops","Guest Hospitality","Bank Charges","Miscellaneous"],selectedIndex:null,modals:{add:!1,edit:!1,delete:!1}}},computed:{filteredExpenses(){return this.expenses.filter((e=>e.category.toLowerCase().includes(this.searchQuery.toLowerCase())||e.description.toLowerCase().includes(this.searchQuery.toLowerCase())))},paginatedExpenses(){const e=(this.currentPage-1)*this.itemsPerPage;return this.filteredExpenses.slice(e,e+this.itemsPerPage)},totalPages(){return Math.max(1,Math.ceil(this.filteredExpenses.length/this.itemsPerPage))}},watch:{searchQuery(){this.currentPage=1}},methods:{openAddModal(){this.resetForm(),this.modals.add=!0},openEditModal(e,t){this.form={...e},this.selectedIndex=t,this.modals.edit=!0},openDeleteModal(e){this.selectedIndex=e,this.modals.delete=!0},addExpense(e){this.expenses.push({...e}),this.closeModals()},updateExpense(e){this.expenses[this.selectedIndex]={...e},this.closeModals()},deleteExpense(){this.expenses.splice(this.selectedIndex,1),this.closeModals()},closeModals(){this.modals={add:!1,edit:!1,delete:!1}},resetForm(){this.form={date:"",category:"",description:"",amount:""}}}};const St=(0,c.A)(Mt,[["render",Pt],["__scopeId","data-v-4a1e2e4a"]]);var At=St;const jt={class:"tab-content"},_t={class:"bg-white p-6 rounded-lg shadow"},It={class:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"},Ft={class:"text-lg font-semibold mb-1"},Dt={class:"text-sm text-gray-600 mb-3"},Xt=["onClick"];function Tt(e,t,a,s,o,i){return(0,n.uX)(),(0,n.CE)("section",jt,[(0,n.Lk)("div",_t,[t[0]||(t[0]=(0,n.Lk)("h2",{class:"text-2xl font-semibold mb-4"},"📄 Reports",-1)),t[1]||(t[1]=(0,n.Lk)("p",{class:"text-gray-600 mb-6"},"Generate and view hostel reports.",-1)),(0,n.Lk)("div",It,[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(o.reports,(e=>((0,n.uX)(),(0,n.CE)("div",{key:e.title,class:"bg-gray-50 border p-4 rounded-lg shadow hover:shadow-md transition"},[(0,n.Lk)("h3",Ft,(0,l.v_)(e.title),1),(0,n.Lk)("p",Dt,(0,l.v_)(e.description),1),(0,n.Lk)("button",{class:"text-sm text-blue-600 hover:underline",onClick:t=>i.generateReport(e.key)}," 📥 Generate Report ",8,Xt)])))),128))])])])}var Rt={name:"ReportsView",data(){return{reports:[{key:"monthly-expense",title:"Monthly Expense Summary",description:"Breakdown of all expenses by month"},{key:"category-wise-expense",title:"Category-wise Expense",description:"Total spending per category"},{key:"top-expenses",title:"Top Spending Categories",description:"Highest expenses this month"},{key:"income-vs-expense",title:"Income vs Expenses",description:"Compare income to expenses"},{key:"custom-date-report",title:"Custom Date Range Report",description:"Generate reports between dates"},{key:"staff-expense",title:"Staff-wise Expense Report",description:"Expenses linked to staff"},{key:"room-maintenance",title:"Room Maintenance Costs",description:"Expenses by room/area"},{key:"yearly-summary",title:"Year-End Financial Summary",description:"Overview of annual finances"},{key:"daily-expense-summary",title:"Daily Expense Summary",description:"Track day-wise expense logs"},{key:"weekly-trend",title:"Weekly/Monthly Trends",description:"View trends over time"},{key:"pending-payments",title:"Pending Payments Summary",description:"List tenants with pending dues"},{key:"downloadable-export",title:"Download All Reports",description:"Export complete report data as Excel or PDF"}]}},methods:{generateReport(e){alert(`📊 Generating report for: ${e}`)}}};const Vt=(0,c.A)(Rt,[["render",Tt],["__scopeId","data-v-47a29642"]]);var Qt=Vt;const Ot={class:"min-h-screen flex items-center justify-center bg-gray-50 px-4"},Nt={class:"w-full max-w-md bg-white p-6 rounded-xl shadow-md"};function Wt(e,t,a,l,o,i){return(0,n.uX)(),(0,n.CE)("div",Ot,[(0,n.Lk)("div",Nt,[t[6]||(t[6]=(0,n.Lk)("h2",{class:"text-2xl font-bold text-center text-primary mb-6"},"🔐 Hostel Login",-1)),(0,n.Lk)("form",{onSubmit:t[2]||(t[2]=(0,s.D$)(((...e)=>i.handleLogin&&i.handleLogin(...e)),["prevent"])),class:"space-y-4"},[(0,n.Lk)("div",null,[t[3]||(t[3]=(0,n.Lk)("label",{class:"block text-sm font-medium text-gray-700 mb-1"},"Email",-1)),(0,n.bo)((0,n.Lk)("input",{"onUpdate:modelValue":t[0]||(t[0]=e=>o.form.email=e),type:"email",required:"",placeholder:"you@example.com",class:"w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"},null,512),[[s.Jo,o.form.email]])]),(0,n.Lk)("div",null,[t[4]||(t[4]=(0,n.Lk)("label",{class:"block text-sm font-medium text-gray-700 mb-1"},"Password",-1)),(0,n.bo)((0,n.Lk)("input",{"onUpdate:modelValue":t[1]||(t[1]=e=>o.form.password=e),type:"password",required:"",placeholder:"••••••••",class:"w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"},null,512),[[s.Jo,o.form.password]])]),t[5]||(t[5]=(0,n.Lk)("button",{type:"submit",class:"w-full bg-primary text-white py-2 px-4 rounded hover:bg-blue-800 transition"}," Login ",-1))],32),t[7]||(t[7]=(0,n.Lk)("p",{class:"text-center text-xs text-gray-400 mt-4"},"© 2025 Hostel Management",-1))])])}var Jt={name:"LoginView",data(){return{form:{email:"",password:""}}},methods:{handleLogin(){"admin@example.com"===this.form.email&&"admin123"===this.form.password?this.$router.push("/dashboard"):alert("Invalid credentials. Please try again.")}}};const Kt=(0,c.A)(Jt,[["render",Wt],["__scopeId","data-v-6cb64d69"]]);var $t=Kt;const qt=[{path:"/",redirect:"/login"},{path:"/login",name:"Login",component:$t},{path:"/dashboard",name:"Dashboard",component:g},{path:"/tenants",name:"Tenants",component:xe},{path:"/staff",name:"Staff",component:Oe},{path:"/payments",name:"Payments",component:it},{path:"/expenses",name:"Expenses",component:At},{path:"/reports",name:"Reports",component:Qt}],Ut=(0,u.aE)({history:(0,u.LA)(),routes:qt});var Gt=Ut;const Ht=(0,s.Ef)(m);Ht.use(Gt),Ht.mount("#app")}},t={};function a(s){var n=t[s];if(void 0!==n)return n.exports;var l=t[s]={exports:{}};return e[s].call(l.exports,l,l.exports,a),l.exports}a.m=e,function(){var e=[];a.O=function(t,s,n,l){if(!s){var o=1/0;for(c=0;c<e.length;c++){s=e[c][0],n=e[c][1],l=e[c][2];for(var i=!0,d=0;d<s.length;d++)(!1&l||o>=l)&&Object.keys(a.O).every((function(e){return a.O[e](s[d])}))?s.splice(d--,1):(i=!1,l<o&&(o=l));if(i){e.splice(c--,1);var r=n();void 0!==r&&(t=r)}}return t}l=l||0;for(var c=e.length;c>0&&e[c-1][2]>l;c--)e[c]=e[c-1];e[c]=[s,n,l]}}(),function(){a.d=function(e,t){for(var s in t)a.o(t,s)&&!a.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={524:0};a.O.j=function(t){return 0===e[t]};var t=function(t,s){var n,l,o=s[0],i=s[1],d=s[2],r=0;if(o.some((function(t){return 0!==e[t]}))){for(n in i)a.o(i,n)&&(a.m[n]=i[n]);if(d)var c=d(a)}for(t&&t(s);r<o.length;r++)l=o[r],a.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return a.O(c)},s=self["webpackChunkhostel_management_system"]=self["webpackChunkhostel_management_system"]||[];s.forEach(t.bind(null,0)),s.push=t.bind(null,s.push.bind(s))}();var s=a.O(void 0,[504],(function(){return a(6547)}));s=a.O(s)})();
//# sourceMappingURL=app.d4eb913a.js.map