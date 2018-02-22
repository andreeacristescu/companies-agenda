class LibraryService {
    books = [];
    removedId;
    modalInstance;

    constructor(private $q, private $http, private $uibModal, private $rootScope) {
    }

    getBooks() {

        return this.$http.get('http://localhost:3000/api/agendas')
            .then(res => {
                this.books = res.data
            }).catch(error => this.$q.reject(error.data));
    }

    addBooks(name, description, phoneNumber) {

        let newCompany = {
            'name': name,
            'address': description,
            'phoneNumber': phoneNumber
        };

        return this.$http.post('http://localhost:3000/api/agendas', newCompany)
            .then(res => {
                console.log(res.data);
                this.$rootScope.$broadcast('Refresh company list')
            }).catch(error => this.$q.reject(error.data));

    };

    removeBooks() {

        return this.$http.delete(`http://localhost:3000/api/agendas/${this.removedId}`)
            .then(res => {
                console.log(res.data);
                this.$rootScope.$broadcast('Refresh company list')
            }).catch(error => this.$q.reject(error.data));
    }

    openAddNewBookForm() {
        this.modalInstance = this.$uibModal.open({
            component: 'addBooksForm',
            resolve: {}
        });

        this.modalInstance.result.then(
            (closeData) => {
            },
            (dismissData) => {
            }
        );
    }

    openConfirmationForm(removedId) {
        this.removedId = removedId;
        this.modalInstance = this.$uibModal.open({
            component: 'confirmationForm',
            resolve: {}
        });

        this.modalInstance.result.then(
            (closeData) => {
            },
            (dismissData) => {
            }
        );
    }

}

export {LibraryService};




