class InputCtrl {

    private error;

    constructor() {
    }


    $onInit() {
    }

    resetError() {
        this.error = '';
    }
}

const Input = {
    bindings: {
        error: '<',
        type: '@',
        inputId: '@',
        placeholder: '@',
        label: '@',
        accept: '@',
        bind: '=',
    },
    controller: InputCtrl,
    templateUrl: 'components/input/template.html'
};


export {Input};