import React from 'react';
import PropTypes from 'prop-types';
import TextInput from 'components/TextInput';
import SelectInput from 'components/SelectInput';
import CheckboxInput from 'components/CheckboxInput';

import { gettext } from 'utils';

const userTypes = [
    {value: 'administrator', text: gettext('Administrator')},
    {value: 'internal', text: gettext('Internal')},
    {value: 'public', text: gettext('Public')},
];

function EditUser({user, onChange, errors, companies, onSave, onResetPassword, onClose, onDelete}) {
    return (
        <div className='col'>
            <div className='modal-header'>
                <button
                    id='hide-sidebar'
                    type='button'
                    className='close'
                    data-dismiss='modal'
                    aria-label='Close'
                    onClick={onClose}>
                    <span aria-hidden='true'>&times;</span>
                </button>
            </div>

            <form>
                <TextInput
                    name='first_name'
                    label={gettext('First Name')}
                    value={user.first_name}
                    onChange={onChange}
                    error={errors ? errors.first_name : null} />

                <TextInput
                    name='last_name'
                    label={gettext('Last Name')}
                    value={user.last_name}
                    onChange={onChange}
                    error={errors ? errors.last_name : null} />

                <TextInput
                    name='email'
                    label={gettext('Email')}
                    value={user.email}
                    onChange={onChange}
                    error={errors ? errors.email : null} />

                <TextInput
                    name='phone'
                    label={gettext('Telephone')}
                    value={user.phone}
                    onChange={onChange}
                    error={errors ? errors.phone : null} />

                <SelectInput
                    name='user_type'
                    label={gettext('User Type')}
                    value={user.user_type}
                    defaultOption=''
                    options={userTypes}
                    onChange={onChange}
                    error={errors ? errors.user_type : null} />

                <SelectInput
                    name='company'
                    label={gettext('Company')}
                    value={user.company}
                    defaultOption=''
                    options={companies}
                    onChange={onChange}
                    error={errors ? errors.company : null} />

                <CheckboxInput
                    name='is_approved'
                    label={gettext('Approved')}
                    value={user.is_approved}
                    onChange={onChange} />

                <CheckboxInput
                    name='is_enabled'
                    label={gettext('Enabled')}
                    value={user.is_enabled}
                    onChange={onChange} />


                <div className='modal-footer'>
                    {user._id ?
                        <input
                            type='button'
                            className='btn btn-secondary'
                            value={gettext('Reset Password')}
                            id='resetPassword'
                            onClick={onResetPassword} /> : null}

                    <input
                        type='button'
                        className='btn btn-primary'
                        value={gettext('Save')}
                        onClick={onSave} />

                    <input
                        type='button'
                        className='btn btn-primary'
                        value={gettext('Delete')}
                        onClick={onDelete} />
                </div>


            </form>
        </div>
    );
}

EditUser.propTypes = {
    user: PropTypes.object.isRequired,
    onChange: PropTypes.func,
    errors: PropTypes.object,
    companies: PropTypes.arrayOf(PropTypes.object),
    onSave: PropTypes.func.isRequired,
    onResetPassword: PropTypes.func.isRequired,
    onClose: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
};

export default EditUser;