import {greet} from "./greet";

describe('greet', () => {
    let prompt, alert;

    beforeEach(() => {
        prompt = window.prompt;
        alert = window.alert;

        window.prompt = jest.fn();
        window.alert = jest.fn();
    });

    afterEach(() => {
        window.prompt = prompt;
        window.alert = alert;
    });

    it('should show Agu for small age', function () {
        greet(4);
        expect(window.alert).toHaveBeenCalledWith('Агу');
    });

    it('should show for small age >5 and <18', function () {
        greet(14);
        expect(window.alert).toHaveBeenCalledWith('Привет');
    });
});