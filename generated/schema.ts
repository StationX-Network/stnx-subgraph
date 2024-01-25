// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class Station extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Station entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Station must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Station", id.toString(), this);
    }
  }

  static load(id: string): Station | null {
    return changetype<Station | null>(store.get("Station", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get ownerAddress(): Bytes {
    let value = this.get("ownerAddress");
    return value!.toBytes();
  }

  set ownerAddress(value: Bytes) {
    this.set("ownerAddress", Value.fromBytes(value));
  }

  get daoAddress(): Bytes {
    let value = this.get("daoAddress");
    return value!.toBytes();
  }

  set daoAddress(value: Bytes) {
    this.set("daoAddress", Value.fromBytes(value));
  }

  get gnosisAddress(): Bytes {
    let value = this.get("gnosisAddress");
    return value!.toBytes();
  }

  set gnosisAddress(value: Bytes) {
    this.set("gnosisAddress", Value.fromBytes(value));
  }

  get name(): string {
    let value = this.get("name");
    return value!.toString();
  }

  set name(value: string) {
    this.set("name", Value.fromString(value));
  }

  get symbol(): string {
    let value = this.get("symbol");
    return value!.toString();
  }

  set symbol(value: string) {
    this.set("symbol", Value.fromString(value));
  }

  get tokenType(): string {
    let value = this.get("tokenType");
    return value!.toString();
  }

  set tokenType(value: string) {
    this.set("tokenType", Value.fromString(value));
  }

  get imageUrl(): string {
    let value = this.get("imageUrl");
    return value!.toString();
  }

  set imageUrl(value: string) {
    this.set("imageUrl", Value.fromString(value));
  }

  get isGtTransferable(): boolean {
    let value = this.get("isGtTransferable");
    return value!.toBoolean();
  }

  set isGtTransferable(value: boolean) {
    this.set("isGtTransferable", Value.fromBoolean(value));
  }

  get isGovernanceActive(): boolean {
    let value = this.get("isGovernanceActive");
    return value!.toBoolean();
  }

  set isGovernanceActive(value: boolean) {
    this.set("isGovernanceActive", Value.fromBoolean(value));
  }

  get membersCount(): BigInt {
    let value = this.get("membersCount");
    return value!.toBigInt();
  }

  set membersCount(value: BigInt) {
    this.set("membersCount", Value.fromBigInt(value));
  }

  get timeStamp(): BigInt {
    let value = this.get("timeStamp");
    return value!.toBigInt();
  }

  set timeStamp(value: BigInt) {
    this.set("timeStamp", Value.fromBigInt(value));
  }

  get totalAmountRaised(): BigInt {
    let value = this.get("totalAmountRaised");
    return value!.toBigInt();
  }

  set totalAmountRaised(value: BigInt) {
    this.set("totalAmountRaised", Value.fromBigInt(value));
  }

  get distributionAmount(): BigInt {
    let value = this.get("distributionAmount");
    return value!.toBigInt();
  }

  set distributionAmount(value: BigInt) {
    this.set("distributionAmount", Value.fromBigInt(value));
  }

  get pricePerToken(): BigInt {
    let value = this.get("pricePerToken");
    return value!.toBigInt();
  }

  set pricePerToken(value: BigInt) {
    this.set("pricePerToken", Value.fromBigInt(value));
  }

  get quorum(): BigInt {
    let value = this.get("quorum");
    return value!.toBigInt();
  }

  set quorum(value: BigInt) {
    this.set("quorum", Value.fromBigInt(value));
  }

  get threshold(): BigInt {
    let value = this.get("threshold");
    return value!.toBigInt();
  }

  set threshold(value: BigInt) {
    this.set("threshold", Value.fromBigInt(value));
  }

  get raiseAmount(): BigInt {
    let value = this.get("raiseAmount");
    return value!.toBigInt();
  }

  set raiseAmount(value: BigInt) {
    this.set("raiseAmount", Value.fromBigInt(value));
  }

  get minDepositAmount(): BigInt {
    let value = this.get("minDepositAmount");
    return value!.toBigInt();
  }

  set minDepositAmount(value: BigInt) {
    this.set("minDepositAmount", Value.fromBigInt(value));
  }

  get maxDepositAmount(): BigInt {
    let value = this.get("maxDepositAmount");
    return value!.toBigInt();
  }

  set maxDepositAmount(value: BigInt) {
    this.set("maxDepositAmount", Value.fromBigInt(value));
  }

  get depositDeadline(): BigInt {
    let value = this.get("depositDeadline");
    return value!.toBigInt();
  }

  set depositDeadline(value: BigInt) {
    this.set("depositDeadline", Value.fromBigInt(value));
  }

  get maxTokensPerUser(): BigInt {
    let value = this.get("maxTokensPerUser");
    return value!.toBigInt();
  }

  set maxTokensPerUser(value: BigInt) {
    this.set("maxTokensPerUser", Value.fromBigInt(value));
  }

  get depositTokenAddress(): string {
    let value = this.get("depositTokenAddress");
    return value!.toString();
  }

  set depositTokenAddress(value: string) {
    this.set("depositTokenAddress", Value.fromString(value));
  }
}

export class User extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save User entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type User must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("User", id.toString(), this);
    }
  }

  static load(id: string): User | null {
    return changetype<User | null>(store.get("User", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get daoAddress(): Bytes {
    let value = this.get("daoAddress");
    return value!.toBytes();
  }

  set daoAddress(value: Bytes) {
    this.set("daoAddress", Value.fromBytes(value));
  }

  get daoName(): string {
    let value = this.get("daoName");
    return value!.toString();
  }

  set daoName(value: string) {
    this.set("daoName", Value.fromString(value));
  }

  get userAddress(): Bytes {
    let value = this.get("userAddress");
    return value!.toBytes();
  }

  set userAddress(value: Bytes) {
    this.set("userAddress", Value.fromBytes(value));
  }

  get tokenAddress(): Bytes {
    let value = this.get("tokenAddress");
    return value!.toBytes();
  }

  set tokenAddress(value: Bytes) {
    this.set("tokenAddress", Value.fromBytes(value));
  }

  get depositAmount(): BigInt {
    let value = this.get("depositAmount");
    return value!.toBigInt();
  }

  set depositAmount(value: BigInt) {
    this.set("depositAmount", Value.fromBigInt(value));
  }

  get timeStamp(): BigInt {
    let value = this.get("timeStamp");
    return value!.toBigInt();
  }

  set timeStamp(value: BigInt) {
    this.set("timeStamp", Value.fromBigInt(value));
  }

  get gtAmount(): BigInt {
    let value = this.get("gtAmount");
    return value!.toBigInt();
  }

  set gtAmount(value: BigInt) {
    this.set("gtAmount", Value.fromBigInt(value));
  }

  get isAdmin(): boolean {
    let value = this.get("isAdmin");
    return value!.toBoolean();
  }

  set isAdmin(value: boolean) {
    this.set("isAdmin", Value.fromBoolean(value));
  }
}
