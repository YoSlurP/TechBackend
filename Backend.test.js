import {test,describe,expect} from "vitest"

describe("GET /uzenetek/:id",()=>{
    test("/uzenetek/:id",async()=>{
        const res = await fetch("https://techbackend-app4.onrender.com/uzenetek/025f4bb3-e0d4-4953-909b-4d6e3250fd30",{headers:{"x-user-id":"6noKD1wxDjNcKm6kih9Ee1OBcx72"}})
        const json= await res.json()
        expect(json.data.uzenet).toBe("Mukszik?")
    }),
    test("/uzenetek/:id",async()=>{
        const res = await fetch("https://techbackend-app4.onrender.com/uzenetek/025f4bb3-e0d-d234nz456sfd-909b-4d6e3250fd30",{headers:{"x-user-id":"6noKD1wxDjNcKK5478DFH3ih9Ee1OBcx72"}})
        const json= await res.json()
        expect(json.error).toBe("Ilyen id-val nincs uzenet: 025f4bb3-e0d-d234nz456sfd-909b-4d6e3250fd30")
    })
})
describe("GET /uzenetek",()=>{
    test("/",async()=>{
        const res = await fetch("https://techbackend-app4.onrender.com/uzenetek",{headers:{"x-user-id":"DVohJCmtqdb8r355BquGRLviCsz1"}})
        const json= await res.json()
        expect(json.data.lenght).not.toBe(0)
    })
    test("/",async()=>{
        const res = await fetch("https://techbackend-app4.onrender.com/uzenetek",{headers:{"x-user-id":"DVohJCmtqdb8r355BquGRLviCsz5"}})
        const json= await res.json();
        expect(json.data.lenght).toBe(undefined)
    })
})
describe("GET /admin",()=>{
    test("/admin",async()=>{
        const res = await fetch("https://techbackend-app4.onrender.com/admin",{headers:{"x-user-id":"lS3lELyBRRVYuYNfNdw8y6spDXW2"}})
        const json= await res.json();
        expect(json.data.isAdmin).toBe(true)
    })
    test("/admin",async()=>{
        const res = await fetch("https://techbackend-app4.onrender.com/admin",{headers:{"x-user-id":"6noKD1wxDjNcKm6kih9Ee1OBcx72"}})
        const json= await res.json();
        expect(json.error).toBe("Nem admin vagy")
    })
})
describe("GET /admin/uzenetek",()=>{
    test("/admin/uzenetek",async()=>{
        const res = await fetch("https://techbackend-app4.onrender.com/admin/uzenetek",{headers:{"x-user-id":"lS3lELyBRRVYuYNfNdw8y6spDXW2"}})
        const json= await res.json();
        expect(json.data.lenght).not.toBe(0)
    })
})
describe("POST /admin/valaszok/:id",()=>{
    test("/admin/valaszok/:id",async()=>{
        const res = await fetch("https://techbackend-app4.onrender.com/admin/valaszok/8f381949-2a6e-4163-ab11-2b0657c61919",{
            method:"POST",
            headers:{"x-user-id":"lS3lELyBRRVYuYNfNdw8y6spDXW2","Content-Type":"application/json"},
            body:JSON.stringify({valasz:"Nincs"})
        })
        const json= await res.json();
        expect(json.data.valasz).toBe("Nincs")
        

        
    })
})
describe("POST /uzenetek",()=>{
    test("/",async()=>{
        const res = await fetch("https://techbackend-app4.onrender.com/uzenetek",{
            method:"POST",
            headers:{"x-user-id":"DVohJCmtqdb8r355BquGRLviCsz1","Content-Type":"application/json"},
            body:JSON.stringify({cim:"Kutya",uzenet:"elszokott"})
        })
        const json= await res.json();
        expect(json.data.cim).toBe("Kutya")
        
    })
})

    
