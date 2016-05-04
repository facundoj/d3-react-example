import React, { Component } from 'react';
import d3 from 'd3';

class H1BGraph extends Component {

    constructor() {
        super();
        this.state = {
            rawData: []
        };
    }

    componentWillMount() {
        this.loadRawData();
    }

    loadRawData() {
        let dateFormat = d3.time.format('%m/%d/%Y');

        d3.csv(this.props.url)
            .row((row) => {
                if (!row['base salary']) {
                    return null;
                } else {
                    return {
                        employer: row.employer,
                        submit_date: dateFormat.parse(row['submit date']),
                        start_date: dateFormat.parse(row['start date']),
                        case_status: row['case status'],
                        job_title: row['job title'],
                        clean_job_title: row['job title'],
                        base_salary: +row['base salary'],
                        salary_to: row['salary to'] ? +row['salary to'] : null,
                        city: row.city,
                        state: row.state
                    };
                }
            })
            .get((err, rows) => {
                if (err) {
                    console.error(err);
                } else {
                    this.setState({rawData: rows});
                }
            });
    }

    render() {
        if (!this.state.rawData.length) {
            return (
                <h1>Loading</h1>
            );
        } else {
            return (
                <div>
                    <svg></svg>
                </div>
            );
        }
    }
}

export default H1BGraph;
