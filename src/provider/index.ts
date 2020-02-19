import applicationServiceProvider from './application-service.provider'
import repositoryProvider from './repository.provider'

export default [
    ...applicationServiceProvider,
    ...repositoryProvider,
]
