import { SectionCards } from "@/app/_components/section-cards";
import AddClientSheet from "../_components/add-client-sheet";
import { getClients } from "./actions";
import { Card, CardContent, CardHeader, CardTitle } from "@/app/_components/ui/card";
import { Badge } from "@/app/_components/ui/badge";
import { Avatar, AvatarFallback } from "@/app/_components/ui/avatar";
import { Users, Mail, Phone, Plus, Calendar } from "lucide-react";
import { Button } from "@/app/_components/ui/button";

type Client = {
  id?: string;
  email: string | null;
  userName: string;
  phone: string | null;
  createdAt?: string | Date;
};

export default async function Page() {
  const clients: Client[] = (await getClients()) ?? [];

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(word => word.charAt(0))
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  const formatDate = (date: string | Date) => {
    return new Intl.DateTimeFormat('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    }).format(new Date(date));
  };

  return (
    <div className="@container/main flex flex-1 flex-col gap-6">
      {/* Header Section */}
      <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
        <SectionCards />
      </div>

      {/* Clients Header */}
      <div className="flex items-center justify-between px-6 md:px-8">
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10">
            <Users className="w-5 h-5 text-primary" />
          </div>
          <div>
            <h1 className="text-2xl font-semibold tracking-tight">Clientes</h1>
            <p className="text-sm text-muted-foreground">
              Gerencie seus clientes e suas informações
            </p>
          </div>
        </div>
        <AddClientSheet />
      </div>

      {/* Clients Content */}
      <div className="px-6 md:px-8 flex flex-col gap-6">
        {/* Stats Card */}
        <Card>
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-base font-medium">Resumo</CardTitle>
              <Badge variant="secondary" className="text-xs">
                {clients?.length || 0} cliente{clients?.length !== 1 ? 's' : ''}
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                  <Users className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm font-medium">{clients?.length || 0}</p>
                  <p className="text-xs text-muted-foreground">Total de clientes</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                  <Calendar className="w-4 h-4 text-green-600" />
                </div>
                <div>
                  <p className="text-sm font-medium">
                    {clients?.filter(c => {
                      const today = new Date();
                      const clientDate = new Date(c.createdAt || today);
                      const diffTime = Math.abs(today.getTime() - clientDate.getTime());
                      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
                      return diffDays <= 7;
                    }).length || 0}
                  </p>
                  <p className="text-xs text-muted-foreground">Novos esta semana</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center">
                  <Mail className="w-4 h-4 text-purple-600" />
                </div>
                <div>
                  <p className="text-sm font-medium">
                    {clients?.filter(c => c.email).length || 0}
                  </p>
                  <p className="text-xs text-muted-foreground">Com email</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Clients List */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Últimos clientes criados</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            {!clients || clients.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-12 px-6">
                <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mb-4">
                  <Users className="w-8 h-8 text-muted-foreground" />
                </div>
                <h3 className="text-lg font-medium mb-2">Nenhum cliente encontrado</h3>
                <p className="text-sm text-muted-foreground text-center mb-6 max-w-sm">
                  Você ainda não tem clientes cadastrados. Comece adicionando seu primeiro cliente.
                </p>
                <AddClientSheet />
              </div>
            ) : (
              <div className="divide-y">
                {clients.map((client, index) => (
                  <div
                    key={client.id || client.userName || index}
                    className="flex items-center gap-4 p-6 hover:bg-muted/50 transition-colors"
                  >
                    <Avatar className="w-12 h-12">
                      <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-600 text-white font-semibold">
                        {getInitials(client.userName || 'NN')}
                      </AvatarFallback>
                    </Avatar>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-medium text-sm truncate">
                          {client.userName || 'Nome não informado'}
                        </h3>
                        {client.createdAt && (
                          <Badge variant="outline" className="text-xs">
                            {(() => {
                              const today = new Date();
                              const clientDate = new Date(client.createdAt);
                              const diffTime = Math.abs(today.getTime() - clientDate.getTime());
                              const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
                              return diffDays <= 1 ? 'Novo' : diffDays <= 7 ? 'Recente' : '';
                            })()}
                          </Badge>
                        )}
                      </div>
                      
                      <div className="space-y-1">
                        {client.email && (
                          <div className="flex items-center gap-2 text-xs text-muted-foreground">
                            <Mail className="w-3 h-3" />
                            <span className="truncate">{client.email}</span>
                          </div>
                        )}
                        {client.phone && (
                          <div className="flex items-center gap-2 text-xs text-muted-foreground">
                            <Phone className="w-3 h-3" />
                            <span>{client.phone}</span>
                          </div>
                        )}
                        {client.createdAt && (
                          <div className="flex items-center gap-2 text-xs text-muted-foreground">
                            <Calendar className="w-3 h-3" />
                            <span>Criado em {formatDate(client.createdAt)}</span>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <Button variant="ghost" size="sm" className="text-xs">
                        Editar
                      </Button>
                      <Button variant="ghost" size="sm" className="text-xs">
                        Ver detalhes
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>

        {/* Quick Actions */}
        {clients && clients.length > 0 && (
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Ações rápidas</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                <Button variant="outline" className="justify-start h-auto p-4">
                  <Plus className="w-4 h-4 mr-2" />
                  <div className="text-left">
                    <div className="font-medium">Adicionar cliente</div>
                    <div className="text-xs text-muted-foreground">Criar novo cliente</div>
                  </div>
                </Button>
                <Button variant="outline" className="justify-start h-auto p-4">
                  <Mail className="w-4 h-4 mr-2" />
                  <div className="text-left">
                    <div className="font-medium">Enviar email</div>
                    <div className="text-xs text-muted-foreground">Comunicar com clientes</div>
                  </div>
                </Button>
                <Button variant="outline" className="justify-start h-auto p-4">
                  <Users className="w-4 h-4 mr-2" />
                  <div className="text-left">
                    <div className="font-medium">Exportar lista</div>
                    <div className="text-xs text-muted-foreground">Baixar dados dos clientes</div>
                  </div>
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}