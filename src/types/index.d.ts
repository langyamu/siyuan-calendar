// parent.window for:: https://my.oschina.net/tearlight/blog/3059568
declare interface Window {
    siyuan: {
        config: {
            system: {
                appDir: string;
                confDir: string;
                container: string;
                dataDir: string;
                homeDir: string;
                isInsider: boolean;
                kernelVersion: string;
                networkProxy: { scheme: string; host: string; port: string };
                networkServe: boolean;
                os: string;
                uploadErrLog: boolean;
                workspaceDir: string;
            };
        };
    };
}
