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

import * as Setting from "../Setting";

export function getRecords(owner) {
  return fetch(`${Setting.ServerUrl}/api/get-records?owner=${owner}`, {
    method: "GET",
    credentials: "include",
  }).then(res => res.json());
}

export function deleteRecord(record) {
  const newRecord = Setting.deepCopy(record);
  return fetch(`${Setting.ServerUrl}/api/delete-record`, {
    method: "POST",
    credentials: "include",
    body: JSON.stringify(newRecord),
  }).then(res => res.json());
}

export function getRecord(owner, id) {
  return fetch(`${Setting.ServerUrl}/api/get-record?owner=${owner}&id=${id}`, {
    method: "GET",
    credentials: "include",
  }).then(res => res.json());
}

export function updateRecord(owner, id, record) {
  const newRecord = Setting.deepCopy(record);
  return fetch(`${Setting.ServerUrl}/api/update-record?owner=${owner}&id=${id}`, {
    method: "POST",
    credentials: "include",
    body: JSON.stringify(newRecord),
  }).then(res => res.json());
}

export function addRecord(record) {
  const newRecord = Setting.deepCopy(record);
  return fetch(`${Setting.ServerUrl}/api/add-record`, {
    method: "POST",
    credentials: "include",
    body: JSON.stringify(newRecord),
  }).then(res => res.json());
}
