class NhInputCtrl {

    private error;

    constructor() {
    }

    resetError() {
        this.error = '';
    }
}

const NhInput = {
    bindings:    {
        error:       '<',
        type:        '@',
        inputId:     '@',
        placeholder: '@',
        label:       '@',
        accept:      '@',
        bind:        '=',
    },
    controller:  NhInputCtrl,
    templateUrl: 'components/nh-input/template.html'
};


export {NhInput};