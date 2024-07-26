// Copyright 2023 The casbin Authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

package object

import (
	"crypto/x509"
	"encoding/pem"
	"errors"
	"fmt"
	"time"
)

func getCertExpireTime(s string) (string, error) {
	block, _ := pem.Decode([]byte(s))
	if block == nil {
		return "", errors.New("getCertExpireTime() error, block should not be nil")
	} else if block.Type != "CERTIFICATE" {
		return "", errors.New(fmt.Sprintf("getCertExpireTime() error, block.Type should be \"CERTIFICATE\" instead of %s", block.Type))
	}

	certificate, err := x509.ParseCertificate(block.Bytes)
	if err != nil {
		return "", err
	}

	t := certificate.NotAfter
	return t.Local().Format(time.RFC3339), nil
}
