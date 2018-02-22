class AddBooksFormCtrl {
    public selectedBook;
    public booksList;
    public book;
    public close;

    public name       = '';
    public address = '';
    public phoneNumber = '';

    constructor(private Library) {
        this.selectedBook = null;
    }

    addBook() {
        this.Library.addBooks(this.name, this.address, this.phoneNumber);
        this.close();
    }
}

const AddBooksForm = {
    bindings:    {
        resolve: '<',
        close:   '&',
        dismiss: '&'
    },
    controller:  AddBooksFormCtrl,
    templateUrl: 'components/add-books-form/template.html',
};

export {AddBooksForm};



