import React from 'react';

type State = {
    hasError: boolean;
};

export class ErrorBoundary extends React.Component<React.PropsWithChildren, State> {
    constructor(props: React.PropsWithChildren) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError() {
        return { hasError: true };
    }

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
        console.error("Error caught in ErrorBoundary:", error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
        return <>
            <div className="flex items-center justify-center flex-col h-screen gap-y-4">
                <h2 className="text-lg-clamp text-center text-sky-800 uppercase font-bold tracking-wider">
                    Something went wrong.
                </h2>
                <p className="text-sm text-gray-500">Please try again later.</p>
            </div>
        </>
        }

        return this.props.children;
    }
}
