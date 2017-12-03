// @flow

import type { Question } from 'src/redux/state';
import config from '../../config/default.json';

type HttpMethod = 'GET' | 'POST' | 'PUT' | 'HEAD' | 'DELETE';

type ApiArgs = {
    url: string;
    method?: HttpMethod;
    headers?: {};
    body?: any;
}

type ApiSuccess = {
    status: 200,
    body: any
};

type ApiError = {
    status: number,
    error: any,
};

type ApiResponse = ApiSuccess | ApiError;

async function remoteFetch(args: ApiArgs): Promise<ApiResponse> {
    const headers = {
        ...args ? args.headers : {},
        Accept: 'application/json',
        'Content-Type': 'application/json',
    };

    // eslint-disable-next-line no-undef
    const resp = await fetch(args.url, {
        method: 'GET',
        ...args,
        headers,
        body: args && args.body && JSON.stringify(args.body),
    });

    let respBody = null;

    try {
        const type = resp.headers.get('content-type');
        if (type.indexOf('application/json') !== -1) {
            respBody = await resp.json();
        } else if (type.indexOf('text/plain') !== -1) {
            respBody = await resp.text();
        }
    } catch (parseErr) {
        // global.log.trace({
        //     msg: 'ParseError getting body',
        //     parseErr,
        // });
    }

    if (resp.status !== 200) {
        // global.log.warn({
        //     msg: 'response to unsuccessful request',
        //     response: resp,
        // });

        return {
            status: resp.status,
            error: respBody,
        };
    }

    return {
        status: resp.status,
        body: respBody,
    };
}

async function fetchQuestions(): Promise<Array<Question>> {
    const resp = await remoteFetch({ url: config.API.base_url });

    if (resp.status !== 200 || (!resp.body.results) || (!Array.isArray(resp.body.results)) || (resp.body.results.length < 1)) {
        return [];
    }

    // Use index as the id for ease of use with this sample.
    // This should be handled with something like UUID on a real app and the id would probably come from the server
    return resp.body.results.map((u, index) => ({
        id: index,
        category: u.category,
        // TODO: Questions could be returned from server with HTML characters already escaped
        question: u.question,
        correctAnswer: u.correct_answer.toLowerCase() === 'true',
    }));
}

export {
    remoteFetch,
    fetchQuestions,
};

export type {
    HttpMethod,
    ApiResponse,
    ApiSuccess,
    ApiArgs,
};
