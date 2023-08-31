const foo: (param: number) => void = function (param: number): void {
    console.warn(param);
};
const bar: number = 0;

foo(bar);
