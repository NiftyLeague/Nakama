let rpcHealthcheck: nkruntime.RpcFunction = function (ctx: nkruntime.Context, logger: nkruntime.Logger, nk: nkruntime.Nakama, payload: string): string {
    if (!ctx.userId) {
        throw Error('No user ID in context');
    }

    if (payload) {
        throw Error('Expects no payload.');
    }
    
    logger.info('healthcheck RPC called!');
    return JSON.stringify({success: true});
}

export default rpcHealthcheck;
