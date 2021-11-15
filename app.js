class A {
    constructor(value)
    {
        this.value=value;
    }
     doSomething()
     {
         console.log(this.value);
     }
}

b=new A("Hey!");