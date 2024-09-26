import React from 'react';
import PropTypes from 'prop-types';
import Text from '../Text/Text.jsx';

const FileUpload = ({ id, label }) => {
    return (
        <label
            htmlFor={'file' + id}
            className='p-5 border-2 border-dashed border-gray-300'
        >
            <input id={'file' + id} type="file" className='sr-only' />
            <Text
                className=""
                size="small"
                type="gray-400"
                fontWeight="semibold"
            >{label}</Text>
        </label>
    );
}

export default FileUpload;

FileUpload.propTypes = {
    id: PropTypes.string,
}

FileUpload.defaultProps = {
    label: "Cliquez ici pour charger un fichier"
}