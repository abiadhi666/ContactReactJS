
const UserValidation = (values) => {
    const errors = {};

    if (!values.firstName || values.firstName === "") {
        errors.firstName= "First Name must be filled";
    }

    if (!values.lastName || values.lastName === "") {
        errors.lastName= "Last Name must be filled";
    }

    if (!values.age || values.age === "") {
        errors.age= "Age must be filled";
    }

    if (!values.photo || values.photo === "") {
        errors.photo= "Photo must be filled";
    }

    return errors
};

export default UserValidation