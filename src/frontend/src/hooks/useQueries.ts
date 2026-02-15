import { useActor } from './useActor';

/**
 * Custom hooks for React Query operations.
 * Currently no backend methods are available, but this file is ready
 * for future backend integration.
 */

export function useBackendQueries() {
  const { actor, isFetching } = useActor();

  // Placeholder for future queries
  // Example:
  // return useQuery({
  //   queryKey: ['data'],
  //   queryFn: async () => {
  //     if (!actor) return [];
  //     return actor.getData();
  //   },
  //   enabled: !!actor && !isFetching,
  // });

  return {
    actor,
    isFetching,
  };
}
