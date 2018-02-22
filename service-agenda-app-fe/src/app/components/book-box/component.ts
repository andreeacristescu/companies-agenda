class BookBoxCtrl {
    public booksList;

    constructor(private Library) {
    }

    confirmationForm(id) {
        this.Library.openConfirmationForm(id);
    }
}

const BookBox = {
    bindings:    {
        book:    '=',
        resolve: '<',
        close:   '&',
        dismiss: '&'
    },
    controller:  BookBoxCtrl,
    templateUrl: 'components/book-box/template.html'
};

export {BookBox};
