package main

import (
	"context"
	"database/sql"
	"encoding/json"

	"github.com/heroiclabs/nakama-common/runtime"
)

type HealthCheckResponse struct {
	Success bool `json: "success"`
}

func rpcRHealthceck(ctx context.Context, logger runtime.Logger, db *sql.DB, nk runtime.NakamaModule, payload string) (string, error) {
	logger.Debug("Healthcheck RPC Called")

	response := &HealthCheckResponse{Success: true}
	out, err := json.Marshal(response)

	if err != nil {
		logger.Error("Error marshaling reponse to json: %v", err)
		return "", runtime.NewError("Cannot marshal type", 13)
	}
	return string(out), nil
}
