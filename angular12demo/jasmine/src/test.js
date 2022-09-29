describe('testing Greet function',()=>{
    //executes only after every test case
    beforeEach('before each test case',()=>{
        console.log('before each')
    })
    
        it('first test case',()=>{
            expect(true).toBe(true)
        })
    
        it('socond failed case',()=>{
            expect(4).toBe(4)
        })
    })
    
    describe('testing Greet function 2',()=>{
        it('first test case',()=>{
            expect(true).toBe(true)
        })
    
        it('socond failed case',()=>{
            expect(4).toBe(4)
        })
    })
    
    describe ('testing first case', () => {
        beforeEach(() => {
            console.log('before each')
        })
        afterEach(() => {
            console.log('after each')
        })
    
        it('first test case', () => {
            expect(greet()).toBe('HI')
        })
        it('first test case', () => {
            expect(true).toBe(true)
        })
        it('second test case', () => {
            expect(2+2).toBe(4)
        })
    })