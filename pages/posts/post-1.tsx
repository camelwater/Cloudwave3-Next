import Head from 'next/head';

export default function FirstPost() {
    return (
        <>
            <Head>
                <title> First Post</title>
            </Head>
                <h1>First Post</h1>
                <h2>
                    <a href='https://www.google.com' target='_blank' rel='noopener noreferrer'>
                        Do something cool
                    </a>
                </h2>
        </>
    );
}