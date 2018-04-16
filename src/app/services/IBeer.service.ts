export abstract class IBeerService {

  abstract getBeers(search, order, sort);

  abstract getBeerById(id);
}
