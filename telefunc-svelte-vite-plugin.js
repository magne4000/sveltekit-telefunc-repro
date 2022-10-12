export default function myPlugin() {
  const virtualModuleId = '$telefunc'
  const resolvedVirtualModuleId = '\0' + virtualModuleId
  let config;

  return {
    name: 'telefunc:svelte-kit',
    configResolved(resolvedConfig) {
      // store the resolved config
      config = resolvedConfig
    },
    resolveId(id) {
      if (id.startsWith(virtualModuleId)) {
        return `\0${id}`;
      }
    },
    load(id) {
      if (id.startsWith(resolvedVirtualModuleId)) {
        const rel = id.replace(`${resolvedVirtualModuleId}/`, '');
        return `export * from "$lib/../telefunc/${rel}";`
      }
    }
  }
}