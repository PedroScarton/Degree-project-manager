import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import { Button as Btn } from '@material-ui/core';

const ContainedButton = withStyles((theme) => ({
    root: {
        color: 'white',
        backgroundColor: '#26A5EA',
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            'Rajdhani',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
        ].join(','),
        fontSize: 14,
        textTransform: 'none',
        borderWidth: 2,
        fontWeight: '400',
        padding: '0.4rem 0',
        borderColor: '#D3131C',
        '&:hover': {
            backgroundColor: '#26A5EA',
            borderColor: '#26A5EA',
        },
        '&:disabled': {
            color: 'white',
            borderColor: '#B4B4B4',
            backgroundColor: '#B4B4B4',
        },
    },
}))(Btn);

const ContainedButtonOrange = withStyles((theme) => ({
    root: {
        color: 'white',
        backgroundColor: '#EA4700',
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            'Rajdhani',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
        ].join(','),
        fontSize: 14,
        textTransform: 'none',
        borderWidth: 2,
        fontWeight: '400',
        padding: '0.4rem 0',
        borderColor: '#EA4700',
        '&:hover': {
            backgroundColor: '#EA4700',
            borderColor: '#EA4700',
        },
        '&:disabled': {
            color: 'white',
            borderColor: '#B4B4B4',
            backgroundColor: '#B4B4B4',
        },
    },
}))(Btn);

const OutlinedButton = withStyles((theme) => ({
    root: {
        color: '#26A5EA',
        borderColor: '#26A5EA',
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            'Rajdhani',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
        ].join(','),
        textTransform: 'none',
        borderWidth: 2,
        fontSize: 14,
        fontWeight: '300',
        padding: '0.3rem 0',
        boxSizing: 'border-box',
        backgroundColor: 'white',
        '&:hover': {
            borderWidth: 2,
            borderColor: '#26A5EA',
            color: '#26A5EA',
            backgroundColor: 'white',
        },
        '&:disabled': {
            color: '#B4B4B4',
            borderWidth: 2,
            backgroundColor: '#F1F1F1',
            borderColor: '#B4B4B4',
        },
    },
}))(Btn);

const Button = (props) => {

    if (props.outlined) {
        return (
            <OutlinedButton
                fullWidth
                disabled={props.disabled}
                type={props.type}
                onClick={props.type === 'submit' ? null : props.onClick}
                variant="outlined"
                color="primary"
                href={props.href}
                download={props.download}
                disableElevation={props.elevated}
            >
                {props.children}
            </OutlinedButton>
        );
    } else if (props.secondary) {
        return (
            <ContainedButtonOrange
                fullWidth
                disabled={props.disabled}
                type={props.type}
                onClick={props.type === 'submit' ? null : props.onClick}
                color="primary"
                href={props.href}
                download={props.download}
            >
                {props.children}
            </ContainedButtonOrange>
        );
    }


    return (
        <ContainedButton
            fullWidth
            disabled={props.disabled}
            type={props.type}
            onClick={props.type === 'submit' ? null : props.onClick}
            color="primary"
            href={props.href}
            download={props.download}
        >
            {props.children}
        </ContainedButton>
    );
}


export default Button;