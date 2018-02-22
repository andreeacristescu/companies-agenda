class InfoBoxCtrl {
    private type;
    private class;

    constructor() {}

    $onInit() {
        switch(this.type) {
            case 'error':
                this.class = 'error-message';
                break;
            case 'success':
                this.class = 'success-message';
                break;
            case 'warning':
                this.class = 'warning-message';
                break;
            case 'info':
            default:
                this.class = 'info-message';
                break;
        }
    }
}

const InfoBox= {
    bindings: {
        message: "@",
        type: "@"
    },
    controller: InfoBoxCtrl,
    templateUrl: 'components/info-box/template.html',
    transclude: true
};

export { InfoBox };
