import React from 'react';
import { useHistory } from 'react-router-dom';

import { Title } from '../../components/atoms/title/Title';
import { Text } from '../../components/atoms/text/Text';
import { Button } from '../../components/atoms/button/Button';
import './404.css'

export const UnknownURL = () => {
    const history = useHistory();

    const goPageBack = () => {
        console.log("Go Back")
        history.goBack();
    };

    return (
        <div className="container-404">
            <Title>404 Page not found</Title>
            <Text 
            align="text-center"
            >
            Woops. It seems that you have missed the target!
            </Text>

            <Button onClick={goPageBack}
                type="submit"
                className="btn-primary"
                color="green"
            >
            Go back
            </Button>

        </div>

    )
};