// Immediately Invoked Function Expression (IIFE)

(function chai(){
    //named iife
    console.log("DB connected");
})();
//Global Scope m pollution ko rokne k liye IIFE ka use krte hain
//semicolon lagana jaruri hai upar execution k liye agar dono named aur unnamed IIFE ek sath likhe hain to


((name) => {
    //unnamed iife
    console.log(`DB CONNECTED 2 ${name}`);
}) ("akanksha");