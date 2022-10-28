import rpcHealthcheck from "./healthcheck";

function InitModule(ctx: nkruntime.Context, logger: nkruntime.Logger, nk: nkruntime.Nakama, initializer: nkruntime.Initializer) {
    initializer.registerRpc('rpcHealthcheck', rpcHealthcheck);
    logger.info('JavaScript logic loaded.');
}

// Reference InitModule to avoid it getting removed on build
!InitModule && InitModule.bind(null);
