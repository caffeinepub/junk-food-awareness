module {
  type OldActor = {
    var siteVisits : Nat;
  };

  public func run(old : OldActor) : { var siteVisits : Nat } {
    // No data needs to be migrated, so just return old state.
    old;
  };
};
