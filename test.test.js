const {sum,palindrome,getData,app} = require("./app")

//testing with jest

test("addition",()=>{
    expect(sum(2,3)).toBe(5)
})
 
test("checking palindrome",()=>{
    expect(palindrome("mom").toBe(true))
})

//testing with mocha and chai

const {expect} = require("chai")

describe("Testing sum function" , ()=>{
    it("should to be sum of two argumnets" , ()=>{
        expect(sum(2,3)).to.equal(5)
    })
})

//testing async

describe("testing async code",()=>{ 
    it("should send post data", async()=>{
        const post = await getData()
        expect(post).to.deep.equal(1)
    })
})

//testing apis
const request = require("supertest")
describe("testing get '/home' route",()=>{
    it("" , ()=>{
        request(app)
        .get("/home")
        .expect(200)
        .expect(/hello/ , done)
    })
})

describe("testing post '/login' route",()=>{
    it("" , (done)=>{
        request(app)
        .get("/login")
        .expect(201)
        .expect(/login success/ , done)
        
    })
})

//integration testing

describe("intergration testing" , ()=>{
    it("" , (done)=>{
        request(app)
        .post("/login" )
        .post("location change" , /\/home/ , ()=>{
            request(app)
            .post("/login" )
            .get("/home")
            .expect(202)
            .expect("hello",done)
        })
    })
})