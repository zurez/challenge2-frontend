import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react';

export default class ResultComponent extends Component {
    render() {
        return (
            <Grid>
                <Grid.Column
                className="resultBox"
                >
                    <Grid.Column>
                        Result
                    </Grid.Column>
                </Grid.Column>
            </Grid>
        )
    }
}
