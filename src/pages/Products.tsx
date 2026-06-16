import { useState, useMemo } from "react";
import { useSearchParams, Link } from "react-router-dom";
import {
  ShoppingBag,
  Search,
  X,
  Tag,
  SlidersHorizontal,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { products, categories } from "@/data/products";
import { promotions } from "@/data/promotions";
import PromoBanner from "@/components/PromoBanner";

const PER_PAGE = 12;

function formatPrice(value: number) {
  return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeCategory = searchParams.get("categoria") || "";
  const [searchQuery, setSearchQuery] = useState("");
  const [filterOpen, setFilterOpen] = useState(!!activeCategory);
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    let result = products;
    if (activeCategory) {
      result = result.filter((p) => p.category === activeCategory);
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q),
      );
    }
    return result;
  }, [activeCategory, searchQuery]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PER_PAGE));
  const safePage = Math.min(page, totalPages);

  const paginated = useMemo(() => {
    const start = (safePage - 1) * PER_PAGE;
    return filtered.slice(start, start + PER_PAGE);
  }, [filtered, safePage]);

  const setCategory = (cat: string) => {
    if (cat === activeCategory) {
      setSearchParams({});
    } else {
      setSearchParams(cat ? { categoria: cat } : {});
    }
    setPage(1);
  };

  const clearSearch = () => {
    setSearchQuery("");
    setPage(1);
  };

  const clearCategory = () => {
    setSearchParams({});
    setPage(1);
  };

  const hasActiveFilters = activeCategory || searchQuery.trim();

  const pageNumbers = useMemo(() => {
    const pages: (number | "...")[] = [];
    const total = totalPages;
    if (total <= 7) {
      for (let i = 1; i <= total; i++) pages.push(i);
    } else {
      pages.push(1);
      if (safePage > 3) pages.push("...");
      const start = Math.max(2, safePage - 1);
      const end = Math.min(total - 1, safePage + 1);
      for (let i = start; i <= end; i++) pages.push(i);
      if (safePage < total - 2) pages.push("...");
      pages.push(total);
    }
    return pages;
  }, [totalPages, safePage]);

  return (
    <div>
      <section className="pt-16 md:pt-24 pb-12 md:pb-16 bg-linear-to-br from-amber-50 via-white to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-100 rounded-full text-sm font-medium text-amber-700 mb-6">
            <ShoppingBag className="h-4 w-4" />
            Nossos Produtos
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Tudo para seu pet
          </h1>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Alimentação, brinquedos, acessórios e muito mais. Tudo que seu pet
            merece em um só lugar.
          </p>
        </div>
      </section>

      <section className="pb-16 -mt-6 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <PromoBanner items={promotions} />
        </div>
      </section>

      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-sm border border-gray-100 shadow-sm">
            <div className="p-4 sm:p-6">
              <div className="flex items-center gap-3">
                <div className="relative flex-1">
                  <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Buscar produtos por nome, descrição ou categoria..."
                    value={searchQuery}
                    onChange={(e) => {
                      setSearchQuery(e.target.value);
                      setPage(1);
                    }}
                    className="w-full pl-10 pr-9 h-11 rounded-sm border border-gray-200 bg-gray-50 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all"
                  />
                  {searchQuery && (
                    <button
                      onClick={clearSearch}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  )}
                </div>
                <button
                  onClick={() => setFilterOpen(!filterOpen)}
                  className={`flex items-center gap-2 px-4 h-11 rounded-sm border transition-all text-sm font-medium ${
                    filterOpen
                      ? "bg-gray-900 text-white border-gray-900"
                      : "bg-white text-gray-700 border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <SlidersHorizontal className="h-4 w-4" />
                  <span className="hidden sm:inline">Filtros</span>
                  <ChevronDown
                    className={`h-4 w-4 transition-transform duration-300 ${
                      filterOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
              </div>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  filterOpen ? "max-h-80 opacity-100 mt-4" : "max-h-0 opacity-0"
                }`}
              >
                <div className="pt-4 border-t border-gray-100">
                  <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3">
                    Categorias
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <button
                      onClick={() => setCategory("")}
                      className={`px-4 h-9 rounded-sm text-sm font-medium transition-all duration-200 ${
                        !activeCategory
                          ? "bg-gray-900 text-white shadow-sm"
                          : "bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-900"
                      }`}
                    >
                      Todos
                    </button>
                    {categories.map((cat) => (
                      <button
                        key={cat}
                        onClick={() => setCategory(cat)}
                        className={`px-4 h-9 rounded-sm text-sm font-medium transition-all duration-200 ${
                          activeCategory === cat
                            ? "bg-amber-500 text-white shadow-sm shadow-amber-200"
                            : "bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-900"
                        }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {hasActiveFilters && (
              <div className="px-4 sm:px-6 pb-4 flex flex-wrap items-center gap-2 border-t border-gray-100 pt-4">
                <span className="text-xs text-gray-400 font-medium mr-1">
                  Filtros ativos:
                </span>
                {activeCategory && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-50 text-amber-700 text-xs font-medium rounded-full border border-amber-200">
                    {activeCategory}
                    <button
                      onClick={clearCategory}
                      className="hover:text-amber-900 transition-colors"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </span>
                )}
                {searchQuery && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-full border border-blue-200">
                    &ldquo;{searchQuery}&rdquo;
                    <button
                      onClick={clearSearch}
                      className="hover:text-blue-900 transition-colors"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </span>
                )}
                <button
                  onClick={() => {
                    clearSearch();
                    clearCategory();
                  }}
                  className="text-xs text-gray-400 hover:text-gray-600 ml-1 transition-colors"
                >
                  Limpar todos
                </button>
              </div>
            )}
          </div>

          <div className="flex items-center justify-between mt-6 mb-6">
            <p className="text-sm text-gray-500">
              <span className="font-semibold text-gray-900">
                {filtered.length}
              </span>{" "}
              produto{filtered.length !== 1 ? "s" : ""} encontrado
              {filtered.length !== 1 ? "s" : ""}
            </p>
          </div>

          {paginated.length === 0 ? (
            <div className="text-center py-20">
              <ShoppingBag className="h-12 w-12 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Nenhum produto encontrado
              </h3>
              <p className="text-gray-500 text-sm">
                Tente ajustar sua busca ou filtro.
              </p>
            </div>
          ) : (
            <>
              {/* produtos */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                {paginated.map((product) => (
                  <div
                    key={product.id}
                    className="group rounded-sm border border-gray-100 overflow-hidden hover:shadow-md hover:border-amber-200 transition-all duration-300 bg-white"
                  >
                    <div className="aspect-square bg-gray-50 overflow-hidden relative">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        loading="lazy"
                      />
                      {product.originalPrice && (
                        <span className="absolute top-2 left-2 bg-amber-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-0.5">
                          <Tag className="h-2.5 w-2.5" />-
                          {Math.round(
                            (1 - product.price / product.originalPrice) * 100,
                          )}
                          %
                        </span>
                      )}
                    </div>
                    <div className="p-4">
                      <span className="text-[11px] font-medium text-amber-600 uppercase tracking-wider">
                        {product.category}
                      </span>
                      <h3 className="text-sm font-semibold text-gray-900 mt-1 leading-snug line-clamp-2">
                        {product.title}
                      </h3>
                      <p className="text-xs text-gray-500 mt-1 line-clamp-2 leading-relaxed">
                        {product.description}
                      </p>
                      <div className="flex items-baseline gap-2 mt-3">
                        <span className="text-lg font-bold text-gray-900">
                          {formatPrice(product.price)}
                        </span>
                        {product.originalPrice && (
                          <span className="text-sm text-gray-400 line-through">
                            {formatPrice(product.originalPrice)}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {totalPages > 1 && (
                <div className="flex items-center justify-center gap-1.5 mt-10">
                  <button
                    onClick={() => setPage((p) => Math.max(1, p - 1))}
                    disabled={safePage === 1}
                    className="flex items-center justify-center w-9 h-9 rounded-lg border border-gray-200 text-gray-500 hover:border-gray-300 hover:text-gray-700 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </button>

                  {pageNumbers.map((p, i) =>
                    p === "..." ? (
                      <span
                        key={`ellipsis-${i}`}
                        className="w-9 h-9 flex items-center justify-center text-gray-400 text-sm"
                      >
                        ...
                      </span>
                    ) : (
                      <button
                        key={p}
                        onClick={() => setPage(p)}
                        className={`flex items-center justify-center w-9 h-9 rounded-lg text-sm font-medium transition-all ${
                          safePage === p
                            ? "bg-gray-900 text-white shadow-sm"
                            : "border border-gray-200 text-gray-600 hover:border-gray-300 hover:text-gray-900"
                        }`}
                      >
                        {p}
                      </button>
                    ),
                  )}

                  <button
                    onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                    disabled={safePage === totalPages}
                    className="flex items-center justify-center w-9 h-9 rounded-lg border border-gray-200 text-gray-500 hover:border-gray-300 hover:text-gray-700 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-12 shadow-sm border border-gray-100 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Não encontrou o que procura?
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto mb-8">
              Temos uma variedade ainda maior na loja física. Visite-nos ou
              entre em contato para encomendas especiais.
            </p>
            <Link
              to="/contato"
              className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-medium rounded-full px-8 h-11 transition-colors"
            >
              Fale Conosco
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
