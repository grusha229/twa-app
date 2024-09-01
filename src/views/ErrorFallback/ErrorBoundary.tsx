// src/components/ErrorBoundary.tsx
import { Component, type ErrorInfo, type ReactNode } from 'react'
import ErrorFallback from './ErrorFallback'

interface ErrorBoundaryProps {
  children: ReactNode
}

interface ErrorBoundaryState {
  hasError: boolean
  error: Error | null
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor (props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  static getDerivedStateFromError (error: Error) {
    // Обновите состояние, чтобы следующий рендеринг показал резервный UI
    return { hasError: true, error }
  }

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type, @typescript-eslint/lines-between-class-members
  componentDidCatch (error: Error, errorInfo: ErrorInfo) {
    // Логирование ошибки или отправка на сервер
    console.error('Uncaught error:', error, errorInfo)
  }

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type, @typescript-eslint/lines-between-class-members
  render () {
    if (this.state.hasError && this.state.error) {
      return <ErrorFallback error={this.state.error} />
    }

    return this.props.children
  }
}

export default ErrorBoundary
